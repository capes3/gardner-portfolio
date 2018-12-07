const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , nodemailer = require('nodemailer')
    , xoauth2 = require('xoauth2')
    , {check, validationResult} = require('express-validator/check')


require('dotenv').config()
var app = express()

app.use( express.static(`${__dirname}/../build`))

app.use(cors())
app.use(bodyParser.json())


app.use('/contact',[
 check('firstName').isLength({min:2}),
 check("email").isEmail()

        ],(req, res)=>{
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
        text: "You've recieved a new message\n First Name:" + `${req.body.firstName}\n`+" Last Name:" + `${req.body.lastName}\n`+ " Email: " +`${req.body.email}\n` +" Message:"+`${req.body.message}`,

    }
    transporter.sendMail(mailOptions, function(err, res){
        if (err) {
            return console.error('there was an error:', err);    
        } else {
            console.log('Message sent: '+ res.response)
        }
    })

    res.sendStatus(200)
}
    
)


app.listen(3005, ()=>{console.log('app is listening on 3005')})