var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'))

//requiring readability
var read = require('node-readability');
var bodyParser = require('body-parser');
app.use(bodyParser.json({extended: true}));

// var password = require('./password.js')
// var connectionString = ....'+ password +'......  same for var config

//readability called, passing in article on user click to controller then factory than server and back to the view
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

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  var port = server.address().port;
  console.log('Server running at http://localhost:%s', port);
});
