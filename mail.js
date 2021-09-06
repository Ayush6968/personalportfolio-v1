/** @format */

const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
	auth: {
		api_key: `${process.env.API_KEY}`,
		domain: `${process.env.DOMAIN_NAME}`,
	},
};
const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (name, subject, email, message, callback) => {
	let mailOptions = {
		to: 'tommysingh460@gmail.com',
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
