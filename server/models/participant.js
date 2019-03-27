const mongoose = require('mongoose')
const { PARTICIPANT_TYPES, REQUIRED_FIELDS } = require('../utilities/data');
const Activity = require('./activity');
const ObjectId = mongoose.Types.ObjectId;

const Participant = new mongoose.Schema({
    name: {
        type: String,
        required: REQUIRED_FIELDS['participant'].includes('name'),
        trim: true
    },
    type: {
        type: [String],
        enum: PARTICIPANT_TYPES,
        required: REQUIRED_FIELDS['participant'].includes('type'),
    },
    dataOwner: {
        type: Boolean,
        default: false,
    },
    organization: {
        type: String,
        required: REQUIRED_FIELDS['participant'].includes('organization'),
    },
    explanation: {
        type: String,
        required: REQUIRED_FIELDS['participant'].includes('explanation'),
    }
})

Participant.statics.deleteParticipantById = function (id) {
    return this.findByIdAndDelete(id)
        .then(deletedParticipant => {
            // Now delete his reference from all his activities
            return Activity.find({ relatedParticipants: ObjectId(id) }).select('_id')
                .then(activities => {
                    return Promise.all([deletedParticipant, ...activities.map(a => Activity.findByIdAndUpdate(a._id, { $pull: { relatedParticipants: ObjectId(id) } }))])
                })
        })
}

module.exports = mongoose.model('Participant', Participant);