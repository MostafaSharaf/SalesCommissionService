//
////
//
var http = require('http');
var url = require('url');
var dt = require('./DateModule');
var sc = require('./SalesCommission');
//
////
//
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  //
  var q = url.parse(req.url, true).query;
  var scParam = q.sales;
  //
  res.write('{"commSales":"' + sc.mySalesCommission(scParam) + '"}');
  //
  res.end();
}).listen(8000);
