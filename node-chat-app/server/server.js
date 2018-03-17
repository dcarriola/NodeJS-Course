const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app); // To use socket.io the server has to be initialized with http
let io = socketIO(server);

// Register static folder
app.use(express.static(publicPath));

// Connect server with client
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Daniel',
    text: 'Hey there!',
    createdAt: 123
  });

  socket.on('createMessage', (message) => {
    console.log('Create message', message);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

// Listen on port
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
