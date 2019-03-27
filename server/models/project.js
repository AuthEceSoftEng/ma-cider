const mongoose = require('mongoose')
const { REQUIRED_FIELDS } = require('../utilities/data')

const Project = new mongoose.Schema({
    name: {
        type: String,
        required: REQUIRED_FIELDS['project'].includes('name'),
        trim: true
    },
    description: {
        type: String,
        required: REQUIRED_FIELDS['project'].includes('description')
    },
    poster: {
        type: String,
        required: REQUIRED_FIELDS['project'].includes('poster')
    }
})

module.exports = mongoose.model('Project', Project);