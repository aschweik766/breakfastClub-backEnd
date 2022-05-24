//User homepage: routes//
const express = require('express');
const StarChart = require('../models/starchart')

const router = express.Router();

//CRUD ROUTES//

router.get("/", (req, res) => {
    res.send('hello world')
})

//CREATE 

//READ
router.get("/starchart", (req, res) => {
    const results = StarChart.find({})
    results.then((chart) => res.send(chart))
})

//other routes to plan//

//POST

router.post("/starchart", (req, res) => {
    StarChart.create(req.body)
        .then(() => {
            res.redirect('/starchart')
        })
        .catch(err => console.error('error:' + err));
})


//UPATE


router.put('/starchart/edit/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    StarChart.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(data => 
        StarChart.find({}).then(data => {
            res.json(data)
        }))
})


// router.put()

// router.delete()








module.exports = router;


