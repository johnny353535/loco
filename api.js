var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var fs = require('fs');

var threads = require('./data/threads.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Deliver threads
app.get("/getThreads", function(req, res){
  res.send(JSON.stringify(threads));
});

// Save threads
app.post("/setThreads", function(req, res){
  //console.log(req.body);
  fs.writeFile('./data/threads.json',JSON.stringify(req.body),function(err) {
      if(err) return console.error(err);
      console.log('Saved threads!');
    })
});



var server = app.listen(4000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Api server listening at http://%s:%s', host, port);

});
