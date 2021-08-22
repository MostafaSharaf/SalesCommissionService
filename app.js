////
//var http = require('http');
//var url = require('url');
//var email = require('./EmailModule');
var sc = require('./SalesCommissionModule');
const port = process.env.PORT;
const express = require('express'),
app = express();
////
getHTTPPostData();
////
function getHTTPPostData() {
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
    res.write('{"commAmount" : "' + sc.mySalesCommission(postSalesAmount) + '"}');
    res.end();
  });

  app.listen(port || 3000, () => {
    console.log('Server is running on http://localhost: ${port}');
  });
}
////
////
/*
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
}).listen(port || 3000);
*/