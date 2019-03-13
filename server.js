// var myApp = require('./app');
// var express = require('express');
// const app = express();
// var path = require('path');


var app = require('./app');







  var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });