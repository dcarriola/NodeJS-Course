const request = require('request');

let getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/c8ca455e50b5d0cb4c44de4188d36451/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};

module.exports = { getWeather };
