const express = require('express');

const User = require('../models/user-model')
const { request } = require('express');
const query = require('express/lib/middleware/query');

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


//getting a single user by id only for login matches might user of DisplayMatchesFrontEnd, not using now.
// router.get("/login-user/:id", (req, res) => {
//     const result = User.findById(req.params.id)
//     result.then((user) => { res.send(user) })
// })


router.get("/users-gender-identity", (req, res) => {
    const result = User.find({genderIdentity: {$eq: 'Male'}})
    result.then((user) => { res.send(user) })

})


router.post("/signup", (req, res) => {
    console.log("signup")
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
            // .then(res.status().json({userId: generatedUserId}))
        })
        .catch(error => {
            res.json(error)
        })
})


//UPDATE edit profile:

router.put('/users/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    User.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((data) => res.json(data))
        console.log("user updated")
            })

//updating/add matches to a user_id individual dashboard:

// router.put('/update-matches', async (req, res) => {
//         const { loginUsername, matchedUsername } = req.body
//         try {
//             const query = { username: loginUsername }
//             const updateMatches = { $push: { matches: { username: matchedUsername }},
//             }
//             const user = await User.findOneAndUpdate(query, updateMatches)
//             res.send(user)
//         } catch {
//             console.log(error)
//         }
//     })

// DELETE did work on HTTP test route with backend.

router.delete('/myaccount/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .catch(console.error)
})



module.exports = router;





//scratch


// router.get("/users-gender-identity", (req, res) => {
//     const gender = req.query.gender
//     const query = { genderIdentity : { $eq: 'Male' } }

//     const findUsersByGender = User.find(query).toArray()

//     res.send(findUsersByGender)
// })
//other routes to plan//

//create post route to Signup a user:

// delete tester//
// router.delete('/myaccount/:id', (req, res) => {
//     User.findOneAndRemove(
//         {_id: req.params.id},
//         )
//         .then( () => res.redirect('/'))
//         .catch(console.error)
//   })


// router.post("/users", (req, res) => {
//     User.create(req.body)
//         .then(() => {
//             res.redirect('/myaccount')
//         })
//         .catch(console.error)
// })


//update/match array  tester

// router.put('/update-matches/:loginUsername', (req, res) => {
    
//     User.findOneAndUpdate({username: req.params.loginUsername}, req.body )
//     .then((data) => res.json(data))
//         console.log("user matches updated.")
// })


// //User homepage: routes//
// const express = require('express');

// const User = require('../models/user-model')
// const SignUp = require('../models/signUpModel');
// const { request } = require('express');

// const router = express.Router();

// //CRUD ROUTES//

// router.get("/", (req, res) => {
//     res.send('hello world')
// })

// //CREATE 

// //READ
// router.get("/users", (req, res) => {
//     const results = User.find({})
//     results.then((user) => {res.send(user)})
// })
// router.get("/users/:id", (req, res) => {
//     const result = User.findById(req.params.id)
//     result.then((user) => {res.send(user)})
// })

// //other routes to plan//

// //POST

// router.post("/users", (req, res) => {
//     User.create(req.body)
//     .then( () => {
//         res.redirect('/myaccount')
//     })
//     .catch(console.error)
// })

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


// //UPATE


// router.put('/users/:id', (req, res) => {
//     console.log(req.params.id)
//     console.log(req.body)
//     User.findByIdAndUpdate({_id: req.params.id}, req.body)
//     .then(data => 
//         User.find({}).then(data => {
//             res.json(data)
//         }))
// })


router.put('/update-matches', async (req, res) => {
        const { loginUserId, matchedLoginId } = req.body
        try {
            const query = { _id: loginUserId }
            const updateMatches = { $push: { matches: { _id: matchedLoginId }},
            }
            const user = await User.findOneAndUpdate(query, updateMatches)
            res.send(user)
        } catch {
            console.log(error)
        }
        
    //     const results = User.findByIdAndUpdate({_id: user_id}, 
    //     {$push: {matches: {user_id: matchedIds}}})
    //    results.then((user) => { res.send(user) })
    
})


// // DELETE

// router.delete('/myaccount/:id', (req, res) => {
//     User.findByIdAndDelete(req.params.id)
//     .catch(console.error)
// })








// module.exports = router;



