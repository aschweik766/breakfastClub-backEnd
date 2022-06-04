const mongoose = require('../databases/connection')

const signUpTemplate = new mongoose.Schema(
    {
        fullName: {
            type: String, required: true
        },
        username: {
            type: String, required: true
        },
        email: {
            type: String, required: true
        },
        password: {
            type: String, required: true
        },
        date: {
            type: Date, default: Date.now
        }
    }
)
const SignUp = mongoose.model('SignUp', signUpTemplate);

module.exports = SignUp;
