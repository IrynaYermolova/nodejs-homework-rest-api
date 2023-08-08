const nodemailer = require("nodemailer");

require("dotenv").config();

const { PASSWORD } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "albinanonekokoieva@meta.ua",
    pass: PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const emailOptions = {
  from: "albinanonekokoieva@meta.ua",
  to: "albina.kokoieva@gmail.com",
  subject: "Nodemailer test",
  text: "Test.... U did it!",
};

transporter
  .sendMail(emailOptions)
  .then((info) => console.log(info))
  .catch((err) => console.log(err));

module.exports = transporter;
