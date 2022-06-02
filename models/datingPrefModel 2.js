const mongoose = require('../databases/connection')

const DatingPrefSchema = new mongoose.Schema(
    {
        image: String,
        userName: String,
        firstName: String,
        location: String,
        zodiacSign: String,
        moonRising: String,
        sunRising: String,
        venus: String,
        likedYou: Boolean,
        vaccinated: Boolean,        
        bio: String,
        lookingFor: String,
        interests: {
            first: String,
            second: String,
            third: String,
        }
    },
    {timestamps: true}
)

const DatingPref = mongoose.model('DatingPref', DatingPrefSchema);

module.exports = DatingPref;