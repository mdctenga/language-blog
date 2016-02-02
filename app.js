const express = require('express');
const app = express();

// app.METHOD(PATH, HANDLER)

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.put('/', function (req, res) {
  res.send('Got a PUT request');
});

app.post('/user', function (req, res) {
  res.send('Got a POST request at /user');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.listen(3000, function () {
  console.log('Example listening at port 3000');
});