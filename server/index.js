const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , nodemailer = require('nodemailer')
    , xoauth2 = require('xoauth2')


require('dotenv').config()
var app = express();

app.use(cors())
app.use(bodyParser.json())


app.use('/contact', (req, res)=>{
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',

        auth: {
            
                type: 'OAuth2',
                user: process.env.USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: process.env.ACCESS_TOKEN
            
            
        },
       
    })

    const mailOptions = {
        from: `${req.body.firstName}`+`${req.body.lastName}`,
        to:'capener.cade@gmail.com',
        subject: "Contact request from "+`${req.body.firstName}`+" "+`${req.body.lastName}`,
        text: "First Name:" + `${req.body.firstName}`+" Last Name:" + `${req.body.lastName}`+ " Message:" +`${req.body.message}`,

    }
    transporter.sendMail(mailOptions, function(err, res){
        if (err) {
            console.error('there was an error:', err);    
        } else {
            console.log('here is the res: ', res)
        }
    })
}
    
)


app.listen(3005, ()=>{console.log('app is listening on 3005')})