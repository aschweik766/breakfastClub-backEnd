const mongoose = require('../databases/connection')


// Birth Chart
// Returns the birthchart of a subject in SVG format. Also includes the birthchart data and aspects in JSON.
// Parameters to be insterted in the body:


const StarChartSchema = new mongoose.Schema (
    {
        properties: {
                name: {
                    title: "Name",
                    type: String,
                    default: "Test"
                    },
        year: {
                title: "Year",
                type: Number,
                default: 1990
            },
        month: {
                title: "Month",
                type: Number,
                default: 6
            },
        day: {
                title: "Day",
                type: Number,
                default: 16
            },
        hour: {
                title: "Hour",
                type: Number,
                default: 10
            },
        minute: {
                title: "Minute",
                type: Number,
                default: 10
            },
        longitude: {
                title: "Longitude",
                type: Number,
                default: 12.4963655
            },
        latitude: {
                title: "Latitude",
                type: Number,
                default: 41.9027835
            },
        city: {
                title: "City",
                type: String,
                default: "Roma"
            },
        timezone: {
                title: "Timezone",
                type: String,
                default:  "Europe/Rome"
            },
        language: {
                title: "Language",
                type: String,
                default: "EN"
            },
        },
        description: "Astrological type for a subject."
        }
)

const StarChart = mongoose.model('StarChart', StarChartSchema);

module.exports = StarChart;