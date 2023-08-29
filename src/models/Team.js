const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
    team: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true,
        default: 0,
    },
    penalties: {
        type: Number,
        required: true,
        default: 0,
    },
    wins: {
        type: Number,
        required: true,
        default: 0,
    },
    compwins: {
        type: Number,
        required: true,
        default: 0,
    },
    racers: {
        type: String,
        requred: true
    },
    competition: {
        type: String,
        required: true
    },
    enabled: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    notableAchievements: {
        type: String,
        required: true,
    },
})

module.exports = model('Team', teamSchema);