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
function getHTTPPostData(prt) {
  app.use(
    express.urlencoded({
      extended: true
    })
  );
  //
  app.use(express.json())
  //
  app.post('/SalesCommission', (req, res) => {
    var postSalesAmount = req.body.sales;
    console.log('post body sales amount: ' + postSalesAmount);
    //
    res.write('{"CommSales calc thru POST request": "' + sc.mySalesCommission(postSalesAmount) + '"} \n');
    res.end();
  });

  app.listen(prt, function(){
    console.log("server is running on port: " + prt);
  });
}
//
getHTTPPostData(8000);
//
//
/*http.createServer(function (req, res){
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
  //email.sendMyEmail(mailOptions);
}).listen(8000);*/