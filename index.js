const express = require("express");
const app = express()

const dot = require('dotenv').config()
const cors = require('cors')

const methodOverride = require('method-override')
const userController = require('./controllers/user')

app.use('/public', express.static(__dirname + 'public'))
app.use(methodOverride('_method'))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use(userController)




const port = process.env.PORT || 3001
app.listen(port, ()=> {
    console.log(`server running on port: ${port}`)
});
