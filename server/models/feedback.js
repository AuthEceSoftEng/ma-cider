const mongoose = require('mongoose')

const Feedback = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    feedback: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Feedback', Feedback);