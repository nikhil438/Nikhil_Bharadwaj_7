const mongoose = require("mongoose");

const SCHEMA = new mongoose.Schema({
    name: String,
    conductBy: String,
    user: String,
    organizer: String,
    status: String,
    location: String,
    registrationStatus: { type: String, default: 'REGISTERED' },
    campaignStartTime: Date,
    campaignEndTime: Date,
    createdTime: { type: Date, default: Date.now },
    updatedTime: Date
}, { collection: 'user-meetups' })

module.exports = { NAME: 'UserMeetups', SCHEMA }