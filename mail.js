const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth={
auth: {
  api_key:"key-e3fb6cc055f75a4ff2ca3798babc35b3",
  domain:"sandboxaa7b20b1cdfb4301a28ff52f5480a372.mailgun.org",
}
};
const transporter = nodemailer.createTransport(mailgun(auth));


const sendMail=(name,subject,email,message,callback)=>{
let mailOptions = {
    to: 'tommysingh460@gmail.com',
    name,
    subject:subject, 
    from:email,
    text:message,
    
  
};


transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
     return callback(error,null)
    }
    callback(null,data)
});

}

module.exports= sendMail;