const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({error: 'page not found'});
});

app.get('/users', (req, res) => {
  let users = [{
    name: 'ekansh',
    age: 25,
  }, {
    name: 'sanjay',
    age: 25,
  }];
  res.send(users);
});

app.listen(3000);
module.exports.app = app;
