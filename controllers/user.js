//User homepage: routes//
const express = require('express');

const User = require('../models/user-model')
const SignUp = require('../models/signUpModel');
const { request } = require('express');

const router = express.Router();

//CRUD ROUTES//

router.get("/", (req, res) => {
    res.send('hello world')
})

//CREATE 

//READ
router.get("/myaccount", (req, res) => {
    const results = User.find({})
    results.then((user) => {res.send(user)})
})

//other routes to plan//

//POST

router.post("/myaccount", (req, res) => {
    User.create(req.body)
    .then( () => {
        res.redirect('/myaccount')
    })
    .catch(console.error)
})

router.post('/signup', (req, res) => {
    const signedUpUser= new SignUp({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    signedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})


//UPATE


router.put('/edit/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(data => 
        User.find({}).then(data => {
            res.json(data)
        }))
})


// router.put()

// router.delete()








module.exports = router;


