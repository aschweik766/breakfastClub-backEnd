const express = require("express");
const app = express()

const dot = require('dotenv').config()
// const cors = require('cors');
// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     optionSuccessStatus: 200,
// }

const methodOverride = require('method-override')
const userController = require('./controllers/user')
// const messageController = require('./controllers/messages')
// const starchartController = require('./controllers/starchart')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/public', express.static(__dirname + 'public'))
app.use(methodOverride('_method'))
// app.use(cors(corsOptions))



app.use(userController)
// app.use(messageController)
// app.use(starchartController)




const port = process.env.PORT || 3001
app.listen(port, ()=> {
    console.log(`server running on port: ${port}`)
});
