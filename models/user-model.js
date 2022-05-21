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
        moonRising: String,
        sun: String,
        venus: String
    },
    {timestamps: true}
)

const User = mongoose.model('User', UserSchema);

module.exports = User;