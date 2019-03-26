var express = require('express');
var app = express();
var path = require('path');

app.use('/public',express.static(__dirname+'/public'));



  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });


    app.get('/:dateVal',function(req,res){

        var param = decodeURIComponent(req.params.dateVal);
        var dateOptions = {month : 'long' , year: 'numeric' , day: 'numeric'};



        if(isNaN(param)){
            if(String(new Date(param)) === "Invalid Date"){
              res.json({unix:null, natural:null}); 
            }
            var naturalDate = new Date(param);
            naturalDate = naturalDate.toLocaleDateString('en-US', dateOptions);
            var unixDate = new Date(param).getTime()/1000;
        }else{
            var unixDate = Number(param)
      var naturalDate = new Date(unixDate*1000);
      naturalDate = naturalDate.toLocaleDateString('en-US', dateOptions);
        }


        res.json({unix:unixDate, natural:naturalDate}); 



});







  module.exports = app;