const express = require('express');

let app = express();

// Routes
app.get('/', (req, res) => {
  // res.status(404).send('Hello world!');
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  let users = [
    {
      name: 'Daniel',
      age: 27
    },
    {
      name: 'Ana',
      age: 26
    },
    {
      name: 'Carlos',
      age: 27
    }
  ];
  res.send(users);
});

app.listen(3000);

module.exports.app = app;
