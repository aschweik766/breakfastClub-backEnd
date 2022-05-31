//  USER MODEL for LOGIN/ACCOUNT DATA //

//5 dummy accounts

const mongoose = require('../databases/connection')

const UserSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        DOBmonth: Number, 
        DOBday: Number, 
        DOByear: Number,        
        location: String,
        email: String,
        username:   String,
        password: String,
        image: String,
        zodiacSign: String,
        genderIdentity: String,
        interestedIn: [String],
        relationshipStatus: String,
        lookingFor: String,
        bio: String,
        height: String,
        weight: String,
        interests: [String],
        matches: [
            {user_id: String}
        ]
    },
    {timestamps: true}
)

const User = mongoose.model('User', UserSchema);

module.exports = User;