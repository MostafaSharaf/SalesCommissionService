////
var http = require('http');
var url = require('url');
var zeit = require('./DateModule');
var sales = require('./SalesCommissionModule');
var email = require('./EmailModule');
////
const express = require('express')
const app = express()
//
app.use(
  express.urlencoded({
    extended: true
  })
)
//
app.use(express.json())
//
app.post('/todos', (req, res) => {
  console.log(req.body.todo)
})


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  //
  var q = url.parse(req.url, true).query;
  var salesAmount = q.sales;
  //
  res.write('{"commSales":"' + sales.mySalesCommission(salesAmount) + '"}');
  //
  var mailOptions = {
    from: 'thepointtower@gmail.com',
    to: 'mostafa.sharaf@sap.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  sendMyEmail(mailOptions);
  //
  res.end();
}).listen(8000);
