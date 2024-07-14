const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'MVP@gmail.com',
      pass: 'babAEDFCG323'
    }
  });
  
  const mailOptions = {
    from: 'teebliqs4@gmail.com',
    to: 'abodunriniyanda1@gmail.com',
    subject: 'Hello from tunde', 
    text: 'how far how u dey',
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  