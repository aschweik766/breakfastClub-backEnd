const express = require("express");
const dot = require('dotenv').config()
const cors = require('cors')

const methodOverride = require('method-override')


const app = express()

app.use('/public', express.static(__dirname + 'public'))
app.use(methodOverride('_method'))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const controller = require('./controllers/router')


const port = process.env.PORT || 3001
app.listen(port, ()=> {
    console.log(`server running on port: ${port}`)
});
