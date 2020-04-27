const router = require("express").Router();
let nodeMailer = require("nodemailer");
require('dotenv').config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const PERSON_EMAIL = process.env.PERSON_EMAIL;

router.route("/")
    .post(function (req, res) {
        let transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        });
        let mailOptions = {
            to: PERSON_EMAIL,
            subject: req.body.subject,
            text: "Name: " + req.body.name + " : Email: " + req.body.email + " : School: " + req.body.school + " : Location: " + req.body.location + " : Student #: " +req.body.students + " : Message: " + req.body.message
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log("Message has been sent: ", info.messageId, info.response);
        });
        res.status(200);
        res.json();
    });

module.exports = router;