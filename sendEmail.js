//sending emails

//Step 1: Including necessary modules
const nodemailer = require('nodemailer')
const xoauth2 = require('xoauth2')

//Step 2: Creating a transporter method
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '465',
    auth: {
        type: 'OAUTH2',//Authentication Type
        user: '',
        clientId: '',
        clientSecret: '',
        refreshToken: ''
    }
})

//Step 3: Defining mails options such as to, from, content etc
let mailOptions = {
    from: '',
    to: '',
    subject: '',
    text: ''
}

//Step 4: Finally, sendMail method, e = error message, otherwise sent log will be displayed
transporter.sendMail(mailOptions, function (e, r) {
    if (e) {
        console.log(e)
    }
    else {
        console.log(r)
    }
})
