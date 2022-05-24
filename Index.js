// var http = require('http');
// //var dt = require('./myfirstmodule');
// var dt = require('./firstmod')
// let x =    1000;
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(`The date and time is currently ${dt.myMod()}`);
//   res.end();
// }).listen(8080);



var http = require('http');
var dt = require('./data')
var nub = dt.Numbers();

var fNumb = dt.filter(nub);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`The date and time is currently ${fNumb}`);

  res.end();
}).listen(8080);


