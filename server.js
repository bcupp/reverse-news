
var express = require('express');
var app = express();

var password = require('./password.js')
// var connectionString = ....'+ password +'......  same for var config

var read = require('node-readability');
read('https://techcrunch.com/2017/03/14/teams-microsofts-slack-rival-opens-to-all-office-365-users/', function(err,article, meta){
  var results = article.content;
    console.log(results);
   article.close();
});



var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Server running at http://localhost:%s', port);
});
