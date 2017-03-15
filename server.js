var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'))
var read = require('node-readability');
var bodyParser = require('body-parser');
app.use(bodyParser.json({extended: true}));

// var password = require('./password.js')
// var connectionString = ....'+ password +'......  same for var config


app.post('/get-readability', function(req, res){
  var obj = {
    url: req.body.url
  };
  var results;
  read(obj.url, function(err,article, meta){
    console.log('hello');
    results = article.content;
    article.close();
    res.send(results);
  });
});


var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Server running at http://localhost:%s', port);
});
