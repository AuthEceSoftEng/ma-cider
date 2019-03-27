const mongoose = require('mongoose')
const { REQUIRED_FIELDS } = require('../utilities/data')

const App = new mongoose.Schema({
    relatedProject: {
        type: mongoose.Schema.ObjectId,
        ref: 'Project',
        required: REQUIRED_FIELDS['app'].includes('relatedProject'),
        index: true
    },
    name: {
        type: String,
        required: REQUIRED_FIELDS['app'].includes('name'),
        trim: true
    },
    description: {
        type: String,
        required: REQUIRED_FIELDS['app'].includes('description')
    },
    link: {
        type: String,
        required: REQUIRED_FIELDS['app'].includes('link')
    }
})

module.exports = mongoose.model('App', App);