//User homepage: routes//
const express = require('express');

const User = require('../models/user-model')
// const SignUp = require('../models/signUpModel');
const { request } = require('express');

const router = express.Router();

//CRUD ROUTES//

router.get("/", (req, res) => {
    res.send('hello world')
})


//READ
router.get("/users", (req, res) => {
    const results = User.find({})
    results.then((user) => { res.send(user) })
})
router.get("/users/:id", (req, res) => {
    const result = User.findById(req.params.id)
    result.then((user) => { res.send(user) })
})

//other routes to plan//

//CREATE 
//POST

// router.post("/users", (req, res) => {
//     User.create(req.body)
//         .then(() => {
//             res.redirect('/myaccount')
//         })
//         .catch(console.error)
// })

router.post("/signup", (req, res) => {
    const signedUpUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        DOBmonth: req.body.DOBmonth, 
        DOBday: req.body.DOBday, 
        DOByear: req.body.DOByear,
        location: req.body.location,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        image: req.body.image,
        zodiacSign: req.body.zodiacSign,
        genderIdentity: req.body.genderIdentity,
        interestedIn: req.body.interestedIn,
        relationshipStatus: req.body.relationshipStatus,
        lookingFor: req.body.lookingFor,
        bio: req.body.bio,
        height: req.body.height,
        weight: req.body.weight,
        interests: req.body.interests
    })
    signedUpUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
})

// router.post('/signup', (req, res) => {
//     const signedUpUser= new SignUp({
//         fullName: req.body.fullName,
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//     })
//     signedUpUser.save()
//     .then(data => {
//         res.json(data)
//     })
//     .catch(error => {
//         res.json(error)
//     })
// })


//UPDATE

router.put('/users/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    User.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(data =>
            User.find({}).then(data => {
                res.json(data)
            }))
})


// DELETE

router.delete('/myaccount/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .catch(console.error)
})
//will have to update backend to matches, update User with matches, update User with messages, get user by compatability: 
    //router.put(user/:addMatches)
    //router.get(user/:matches)
    //router.get(user/:compatability)
    //router.get(user/:get-messages)
        //{from user_id to a user_id}
    //router.post(user/:send-message)









module.exports = router;


