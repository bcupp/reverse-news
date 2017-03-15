var express = require('express');
var app = express();
// var password = require('./password.js')
// var connectionString = ....'+ password +'......  same for var config
var read = require('node-readability');



function readArticle(url){
  var results;
  read(url, function(err,article, meta){
    results = article.content;
    console.log(results);
    article.close();
  });
  return results;
};



var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Server running at http://localhost:%s', port);
});
