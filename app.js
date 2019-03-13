var express = require('express');
var app = express();
var path = require('path');

app.use('/public',express.static(__dirname+'/public'));




var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];






  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });




  module.exports = app;