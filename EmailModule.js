//
var nodemailer = require('nodemailer');
//
exports.sendmyEmail = function (mailOptions) {
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
};
//
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thepointtower@gmail.com',
    pass: 'Sosi_2010'
  }
});