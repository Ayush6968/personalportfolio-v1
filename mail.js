const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

require('dotenv').config();

console.log(process.env);

const auth = {
	auth: {
		api_key: process.env.API_KEY,
		domain: 'sandboxaa7b20b1cdfb4301a28ff52f5480a372.mailgun.org',
	},
};
const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (name, subject, email, message, callback) => {
	let mailOptions = {
		to: 'agupta17_be18@thapar.edu',
		name,
		subject: subject,
		from: email,
		text: message,
	};

	transporter.sendMail(mailOptions, (error, data) => {
		if (error) {
			return callback(error, null);
		}
		callback(null, data);
	});
};

module.exports = sendMail;
