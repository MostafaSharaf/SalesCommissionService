////
var http = require('http');
var url = require('url');
var zeit = require('./DateModule');
var email = require('./EmailModule');
var sc = require('./SalesCommissionModule');
////
const express = require('express'),
app = express();
////
function getHTTPPostData() {
  app.use(
    express.urlencoded({
      extended: true
    })
  );
  //
  app.post('/SalesCommission', (req, res) => {
    console.log('post body: ' + req.body.sales);
    res.end();
  });

  app.listen(3000, function(){
    console.log("server is running on port 3000");
  });
}
//
http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'application/json'});
  //
  var q = url.parse(req.url, true).query;
  var getSalesAmount = q.sales;
  res.write('{"commSales calc thru GET request": "' + sc.mySalesCommission(getSalesAmount) + '"} \n');
  ////
  //  
  var postSalesAmount;
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  //
  getHTTPPostData();
  //
  req.on('end', () => {
    postSalesAmount = JSON.parse(data).sales;
    res.write('{"CommSales calc thru POST request": "' + sc.mySalesCommission(postSalesAmount) + '"} \n');
    res.end();
  });
  ////
  /////
  var mailOptions = {
    from: 'thepointtower@gmail.com',
    to: 'mostafa.sharaf@sap.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
 // sendMyEmail(mailOptions);
}).listen(8000);