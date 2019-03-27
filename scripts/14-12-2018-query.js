/**
    We would like to know for each of the stakeholders typed “older adult” in
    Bremen Hemelingen, in which activities he or she has participated. So
    ideally we would have a graph for each of the following stakeholders listing
    all the activities where he/she is listed as “related stakeholders”.
*/

require('dotenv').config();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });
const { Project, Participant, Activity } = require('../server/models');
const fs = require('fs');

const sActivity = a => ({ name: a.name, _id: a._id });
const sParticipant = p => ({ name: p.name, _id: p._id });

let result = []; // {participant,activities}

const arrayToCSV = twoDiArray => {
    var csvRows = [];
    for (var i = 0; i < twoDiArray.length; ++i) {
        for (var j = 0; j < twoDiArray[i].length; ++j) {
            twoDiArray[i][j] = '\"' + twoDiArray[i][j] + '\"';
        }
        csvRows.push(twoDiArray[i].join(','));
    }
    return csvRows.join('\r\n');
}

Participant.find({})
    .then(participants => {
        // console.log(participants);
        Project.findOne({ name: 'Bremen Hermenlingen' }).select('_id')
            .then(project => {
                return Activity.find({ relatedProject: ObjectId(project._id) })
            })
            .then(activities => {
                activities.forEach(activity => {
                    activity.relatedParticipants.forEach(participantId => {
                        const index = result.findIndex(v => String(v.participant._id) === String(participantId))
                        if (index === -1) {
                            result.push({
                                participant: sParticipant(participants.find(p => String(p._id) === String(participantId))),
                                activities: [sActivity(activity)]
                            })
                        } else {
                            result[index] = {
                                ...result[index],
                                activities: result[index].activities.concat([sActivity(activity)])
                            }
                        }
                    })
                });

                let array = [
                    ['participant'].concat(activities.map(a => a.name))
                ]

                result.forEach((r, i) => {
                    array.push([r.participant.name].concat(activities.map(({ name }) => r.activities.find(a => a.name === name) ? '+' : ' ')))
                })

                // console.log(JSON.stringify(result, null, 2))
                // console.log(arrayToCSV(array))
                fs.writeFileSync('14-12-2018-query.csv', arrayToCSV(array), 'utf8')
            })
    })
    .catch(err => {
        console.log(err)
    })

