var express = require('express');
var fs = require("fs");
var path = require("path")

var app = express();

app.get('/api/v1/users', function (req, res) {
  let filePath = path.resolve(__dirname, "../data/users.json");
  console.info('Reading '+filePath)
  fs.readFile( filePath, 'utf8', function (err, data) {
     res.end( data );
  });
})

app.get('/ping', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  console.log("Express App running at http://127.0.0.1:3000/");
})


