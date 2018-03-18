// Use ES5 to avoid the app to crash in different browsers
var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#message-template').html();
  var html = Mustache.render(template, {
    from: message.from,
    text: message.text,
    createdAt: formattedTime
  });
  jQuery('#messages').append(html);
});

socket.on('newLocationMessage', function(message) {
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#location-message-template').html();
  var html = Mustache.render(template, {
    from: message.from,
    url: message.url,
    createdAt: formattedTime
  });
  jQuery('#messages').append(html);
});

jQuery('#message-form').on('submit', function(event) {
  event.preventDefault();

  let messageTxt = jQuery('[name=message]');
  socket.emit('createMessage', {
    from: 'User',
    text: messageTxt.val()
  }, function() {
    messageTxt.val('');
  });
});

var locationBtn = jQuery('#send-location');
locationBtn.on('click', function() {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser');
  }

  locationBtn.attr('disabled', 'disabled').text('Sending...');

  navigator.geolocation.getCurrentPosition(function(position) {
    locationBtn.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function() {
    locationBtn.removeAttr('disabled').text('Send location');
    alert('Unable to fetch location');
  }, {
    timeout: 5000,
    enableHighAccuracy: true
  });
});
