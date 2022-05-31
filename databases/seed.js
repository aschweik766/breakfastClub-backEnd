const User = require('../models/user-model')
const userData = require('../databases/seed.json')
    console.log(userData);

User.deleteMany({})
    .then(()=> {
        return User.collection.insertMany(userData)
    })
    .then((res) => console.log(res))
    .finally(() => {
        process.exit()
    });
