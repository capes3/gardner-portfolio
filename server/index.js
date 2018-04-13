const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')

var app = express();

app.use(cors())
app.use(bodyParser.json())


app.listen(3005, ()=>{console.log('app is listening on 3005')})