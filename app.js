var express = require('express');
var app = express();
app.get('/info.json', function(req, res){
  var body = 'Hello, world';
  res.setHeader('Content-type', 'text/plain');
  res.setHeader('Content-length', body.length);
  res.end(body);
});
