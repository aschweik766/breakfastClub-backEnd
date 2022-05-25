const DatingPref = require('../models/datingPrefModel')
const datingPrefData = require('../databases/seedDatingPref.json')
    console.log(datingPrefData);

DatingPref.deleteMany({})
    .then(()=> {
        return DatingPref.collection.insertMany(datingPrefData)
    })
    .then((res) => console.log(res))
    .finally(() => {
        process.exit()
    });
