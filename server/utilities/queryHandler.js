const { Participant, Activity } = require('../models');
const { flattenArray } = require('./helpers')
const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });
const ObjectId = mongoose.Types.ObjectId;
const f = {

    /**
     * 1 - Number of people involved per participant type for the entire project
     * (bar plot)
     * 
     */
    query1: projectId => {
        return Activity.find({ relatedProject: ObjectId(projectId) }).select('relatedParticipants').exec()
            .then(activities => {
                return Participant.find({ _id: { $in: flattenArray(activities.map(a => (a.relatedParticipants).map(p => ObjectId(p)))) } })
            })
            .then(participants => {
                let x = []; let y = [];
                participants.forEach(({ type }) => {
                    type.forEach(t => {
                        const index = x.indexOf(t);
                        if (index === -1) {
                            x.push(t); y.push(1)
                        } else {
                            y[index]++;
                        }
                    })
                })
                return Promise.resolve({
                    plotlyData: [{
                        type: 'bar',
                        x, y
                    }]
                })
            })
    },

    /**
    *  2 - Participant (type) engagement per activity-type of project
    (grouped barplot for each activity-type)
    * 
    */
    query2: projectId => {
        return Activity.find({ relatedProject: ObjectId(projectId) })
            .select('type relatedParticipants')
            .populate('relatedParticipants').exec()
            .then(activities => {
                const activityTypes = Array.from(new Set(activities.map(a => a.type)));
                let plotlyData = [];
                activities.forEach(activity => {
                    const j = activityTypes.indexOf(activity.type);
                    activity.relatedParticipants.forEach(participant => {
                        participant.type.forEach(t => {
                            const index = plotlyData.findIndex(p => p.name === t);
                            if (index === -1) {
                                plotlyData.push({
                                    type: 'bar',
                                    name: t,
                                    x: activityTypes,
                                    y: activityTypes.map((_, k) => k === j ? 1 : 0)
                                })
                            } else {
                                plotlyData[index].y[j]++;
                            }
                        })
                    })
                })
                return Promise.resolve({
                    plotlyData,
                    plotlyLayout: {
                        "legend": {
                            "x": 0,
                            "y": 1,
                            "orientation": "v"
                        }
                    }
                })
            })
    },

    /**
    * 3 - Number of type of activities for the project (barplot)
        (barplot)
    * 
    */
    query3: projectId => {
        return Activity.find({ relatedProject: ObjectId(projectId) }).select('type')
            .then(activities => {
                let x = []; let y = [];
                activities.forEach(({ type }) => {
                    const index = x.indexOf(type);
                    if (index === -1) {
                        x.push(type);
                        y.push(1);
                    } else {
                        y[index]++;
                    }
                })
                return Promise.resolve({
                    plotlyData: [{
                        x, y, type: 'bar'
                    }]
                })
            })
    },

    /**
    * 4 - Number of substage of activities for the projcet (barplot)
    * 
    */
    query4: projectId => {
        return Activity.find({ relatedProject: ObjectId(projectId) }).select('substage')
            .then(activities => {
                let x = []; let y = [];
                activities.forEach(({ substage }) => {
                    substage.forEach(s => {
                        const index = x.indexOf(s);
                        if (index === -1) {
                            x.push(s);
                            y.push(1);
                        } else {
                            y[index]++;
                        }
                    })
                })
                return Promise.resolve({
                    plotlyData: [{
                        x, y, type: 'bar'
                    }]
                })
            })
    },

    /**
    * 5 - Overview of attendees per activity -> Number of participants per activity
    * 
    */
    query5: projectId => {
        return Activity.find({ relatedProject: ObjectId(projectId) }).sort('date.start').select('relatedParticipants date')
            .then(activities => {
                let x = []; let y = [];
                activities.forEach(({ date, relatedParticipants }) => {
                    x.push(`${date.start.getDate()}-${date.start.getMonth() + 1}-${date.start.getFullYear()}`);
                    y.push(relatedParticipants.length)
                })
                return Promise.resolve({
                    plotlyData: [{
                        x, y, type: 'bar'
                    }]
                })
            })
    },

    /**
    * 6 - Who participated in what activities sub stage (grouped bar plot)
    * 
    */
    query6: projectId => {
        return Activity.find({ relatedProject: ObjectId(projectId) })
            .select('substage relatedParticipants')
            .populate('relatedParticipants').exec()
            .then(activities => {
                const activitySubstages = Array.from(new Set(flattenArray(activities.map(a => a.substage))));
                let plotlyData = [];
                activities.forEach(activity => {
                    activity.substage.forEach(_substage => {
                        const j = activitySubstages.indexOf(_substage);
                        activity.relatedParticipants.forEach(participant => {
                            participant.type.forEach(t => {
                                const index = plotlyData.findIndex(p => p.name === t);
                                if (index === -1) {
                                    plotlyData.push({
                                        type: 'bar',
                                        name: t,
                                        x: activitySubstages,
                                        y: activitySubstages.map((_, k) => k === j ? 1 : 0)
                                    })
                                } else {
                                    plotlyData[index].y[j]++;
                                }
                            })
                        })
                    })
                })
                return Promise.resolve({
                    plotlyData,
                    plotlyLayout: {
                        "legend": {
                            "x": 0,
                            "y": 1,
                            "orientation": "v"
                        }
                    }
                })
            })
    },

    /**
    * 7 - List of participants for each activities
    * 
    */
    query7: projectId => {
        return Activity.find({ relatedProject: ObjectId(projectId) }).populate('relatedParticipants')
            .then(activities => {
                let result = [];
                activities.forEach(activity => {
                    activity.relatedParticipants.forEach(relatedParticipant => {
                        const index = result.findIndex(v => String(v.participant._id) === String(relatedParticipant._id))
                        if (index === -1) {
                            result.push({
                                participant: { _id: relatedParticipant._id, name: relatedParticipant.name },
                                activities: [{ _id: activity._id, name: activity.name }]
                            })
                        } else {
                            result[index] = {
                                ...result[index],
                                activities: result[index].activities.concat([{ _id: activity._id, name: activity.name }])
                            }
                        }
                    })
                });
                let array = [
                    [' '].concat(activities.map(a => a.name))
                ]
                result.forEach((r, i) => {
                    array.push([r.participant.name].concat(activities.map(({ name }) => r.activities.find(a => a.name === name) ? '+' : ' ')))
                })
                return Promise.resolve({
                    plotlyData: [{
                        type: "table",
                        header: {
                            values: [[array[0]]],
                            align: "center",
                            line: {
                                width: 1,
                                color: "black"
                            },
                            fill: {
                                color: "grey"
                            },
                            font: {
                                family: "Arial",
                                size: 12,
                                color: "white"
                            },
                        },
                        cells: {
                            values: array.slice(1),
                            align: "center",
                            line: {
                                color: "black",
                                width: 1
                            },
                            font: {
                                family: "Arial",
                                size: 11,
                                color: [
                                    "black"
                                ]
                            }
                        }
                    }],
                    plotlyLayout: {
                        "margin": {
                            "l": 0,
                            "r": 0,
                            "b": 0,
                            "t": 0,
                            "pad": 0
                        }
                    },
                })
            })

    }
}


module.exports = function (queryNum, projectId) {
    return f[`query${queryNum}`](projectId)
}