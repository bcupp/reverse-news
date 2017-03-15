var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'))
var read = require('node-readability');
// var password = require('./password.js')
// var connectionString = ....'+ password +'......  same for var config



app.get('/get-readability', function(req, res){
  var results;
  console.log(req);
  read(req, function(err,article, meta){
    results = article.content;
    console.log(results);
    article.close();
  });
  res.send(results);
});



var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Server running at http://localhost:%s', port);
});
