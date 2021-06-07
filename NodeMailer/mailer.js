const nodemailer = require("nodemailer");
const keys = require("./config/keys");
const handlebars = require("handlebars");
const fs = require("fs");

const User = require("./models/user");

const readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      throw err;
    } else {
      callback(null, html);
    }
  });
};

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: keys.mailId,
    pass: keys.mailPwd,
  },
});

let mailDetails = {
  from: keys.mailId,
  to: "sarthakagrawal927@gmail.com",
  subject: "Test mail",
  html: { path: __dirname + "/mail.html" },
};

let context = {
  fromName: "Sarthak Agrawal",
};

readHTMLFile(__dirname + "/mail.html", async (err, html) => {
  let template = handlebars.compile(html);
  let replacements = {
    username: "An element from usernames array",
    reason: "An element from reasons array",
  };
  let htmlToSend = template(replacements);
  let mailDetails = {
    from: keys.mailId,
    to: "sarthakagrawal927@gmail.com",
    subject: "Test mail",
    html: htmlToSend,
  };
  await mailTransporter.sendMail(mailDetails, (err, data) => {
    if (err) {
      console.log(err.message);
    }
    // else {
    //   console.log("Email Sent");
    // }
  });
});
