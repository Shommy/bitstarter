var express = require('express');
var fs = require('fs');
var inFile = fs.readFileSync('index.html');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(inFile.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});