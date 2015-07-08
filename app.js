var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello jenkinsss');
});

app.listen(process.env.PORT || 2323);

module.exports = app;
