//  USER MODEL for LOGIN/ACCOUNT DATA //

//5 dummy accounts

const mongoose = require('../databases/connection')

const UserSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        birthday: String,
        location: String,
        birthTime: String,
        email: String,
        userName:   String,
        password: String,
        image: String,
        zodiacSign: String,
        moonRising: String,
<<<<<<< HEAD
        sun: String,
        venus: String
=======
        sunRising: String,
        venus: String,
        datingPreferences: String,
>>>>>>> cd1644e894d390797c13859da131a19d4815b7f4
    },
    {timestamps: true}
)

const User = mongoose.model('User', UserSchema);

module.exports = User;