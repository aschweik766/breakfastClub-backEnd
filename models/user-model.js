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
        sunRising: String,
        venus: String,
        datingPreferences: String,
        bio: String,
        interests: {
            first: String,
            second: String,
            third: String,
        }
    },
    {timestamps: true}
)

const User = mongoose.model('User', UserSchema);

module.exports = User;