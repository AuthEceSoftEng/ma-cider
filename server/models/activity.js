const mongoose = require('mongoose')
const { ACTIVITY_SUBSTAGES, ACTIVITY_TYPES, REQUIRED_FIELDS } = require('../utilities/data');
const { removeFile } = require('../utilities/helpers')
const path = require('path');

const Activity = new mongoose.Schema({
    relatedProject: {
        type: mongoose.Schema.ObjectId,
        ref: 'Project',
        required: REQUIRED_FIELDS['activity'].includes('relatedProject'),
        index: true
    },
    relatedParticipants: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Participant',
        required: REQUIRED_FIELDS['activity'].includes('relatedParticipants'),
        index: true
    }],
    name: {
        type: String,
        required: REQUIRED_FIELDS['activity'].includes('name'),
        trim: true
    },
    type: {
        type: String,
        enum: ACTIVITY_TYPES,
        required: REQUIRED_FIELDS['activity'].includes('type')
    },
    substage: {
        type: [String],
        enum: ACTIVITY_SUBSTAGES,
        required: REQUIRED_FIELDS['activity'].includes('substage')
    },
    date: {
        start: {
            type: Date,
            required: REQUIRED_FIELDS['activity'].includes('date')
        },
        end: {
            type: Date,
            required: REQUIRED_FIELDS['activity'].includes('date')
        }
    },
    location: {
        type: String,
        required: REQUIRED_FIELDS['activity'].includes('location')
    },
    totalHours: {
        type: String,
        required: REQUIRED_FIELDS['activity'].includes('totalHours')
    },
    objective: {
        type: String,
        required: REQUIRED_FIELDS['activity'].includes('objective')
    },
    isDocumented: {
        type: Boolean,
        default: false
    },
    intendedGoal: {
        type: String,
        required: REQUIRED_FIELDS['activity'].includes('intendedGoal')
    },
    result: {
        type: String,
        required: REQUIRED_FIELDS['activity'].includes('result')
    },
    reflection: {
        type: String,
        required: REQUIRED_FIELDS['activity'].includes('reflection')
    },
    supportingMaterial: {
        type: [String],
        required: REQUIRED_FIELDS['activity'].includes('supportingMaterial')
    },
    picture: {
        type: String,
        required: REQUIRED_FIELDS['activity'].includes('picture')
    }
})

Activity.statics.deleteActivityById = function (id) {
    return this.findByIdAndDelete(id)
        .then(deletedActivity => {
            // Now delete all files related to it
            let promises = [];
            if (deletedActivity.picture) {
                promises.push(removeFile(path.join(__dirname, '/../..' + deletedActivity.picture)))
            }
            if (deletedActivity.supportingMaterial && deletedActivity.supportingMaterial.length > 0) {
                promises.push(...deletedActivity.supportingMaterial.map(d => removeFile(path.join(__dirname, '/../..' + d))))
            }
            return Promise.all([deletedActivity, ...promises]);
        })
}

module.exports = mongoose.model('Activity', Activity);