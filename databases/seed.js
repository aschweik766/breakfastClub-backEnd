const User = require('../databases/seed.json')
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