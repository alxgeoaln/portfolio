const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/', function (req, res) {
    const userEmail = req.body.email;
    const name = req.body.name;
    const website = req.body.website;
    const phoneNumber = req.body.phoneNumber;
    const projectInfo = req.body.projectInfo;

    const myEmail = 'georgianalinalexandru@gmail.com';


    //#region Send mail to contacts
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'georgianalinalexandru@gmail.com',
            pass: 'mcwtuyokzmn1'
        }
    });
    const mailOptions = {
        from: userEmail, // sender address
        to: myEmail, // list of receivers
        subject: website, // Subject line
        html: '<p>Name: '+ name +'</p><p>Phone: '+ phoneNumber +'</p><p>Email: '+ userEmail +'</p><br/><p>'+ projectInfo +'</p>' // html body
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error)
        } else {
            res.json({success: true, message: 'Email sent'});
        }
    });
    //endregions
});

module.exports = router;