//User homepage: routes//

const express = require('express');
const res = require('express/lib/response')
//const User = require('..models/user-model')

const router = express.Router();

//CRUD ROUTES//

router.get("/", (req, res) => {
    res.send('hello world')
})

module.exports = router;


