require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });
const models = require('../server/models')
const fs = require('fs');


const db = JSON.parse(fs.readFileSync('db.json', 'utf8'))

const FIELD_SITE_ID_MAPPINGS = {
    '1': "5bc7298a6a99fa153ee2cfb5",
    '2': "5bc7298a6a99fa153ee2cfb6",
    '3': "5bc7298a6a99fa153ee2cfb7",
    '4': "5bc7298a6a99fa153ee2cfb8"
}
const CO_CREATION_STREAM_ID_MAPPINGS = {
    '1': "5bc72b50bbeafa163aaa724d",
    '2': "5bc72b50bbeafa163aaa724e",
    '3': "5bc72b50bbeafa163aaa724f",
    '4': "5bc72b50bbeafa163aaa7250"
}

let INTERVENTION_ID_MAPPINGS = {};
let STAKEHOLDER_ID_MAPPINGS = {};
let ACTIVITIES_ID_MAPPINGS = {};
let APPS_ID_MAPPINGS = {}


Promise.all([
    models.Intervention.find({}).sort('_id'),
    models.Stakeholder.find({}).sort('_id'),
    models.Activity.find({}).sort('_id'),
    models.App.find({}).sort('_id'),

])
    .then(([interventions, stakeholders, activities, apps]) => {
        interventions.forEach((int, j) => { INTERVENTION_ID_MAPPINGS[String(j + 1)] = int._id })
        stakeholders.forEach((st, j) => { STAKEHOLDER_ID_MAPPINGS[String(j + 1)] = st._id })
        activities.forEach((a, j) => { ACTIVITIES_ID_MAPPINGS[String(j + 1)] = a._id })
        apps.forEach((ap, j) => { APPS_ID_MAPPINGS[String(j + 1)] = ap._id })


        return models.TechnicalDecision.insertMany(
            db['technicalDecisions']
                .map(field => ({
                    ...field,
                    relatedActivity: ACTIVITIES_ID_MAPPINGS[String(field.relatedActivity)],
                    relatedApp: APPS_ID_MAPPINGS[String(field.relatedApp)],
                    problemscope: field.problemscope ? field.problemscope : '-',
                    history: field.history ? field.history : '-',
                    recommendation: field.recommendation ? field.recommendation : '-',
                    decision: field.decision ? field.decision : '-',
                    nextsteps: field.nextsteps ? field.nextsteps : '-',
                    feasibility: field.feasibility ? field.feasibility : '-',
                    // recommendation, decision, nextsteps
                    // picture: field.picture ? field.picture : '',
                }))
        )

    })
    .then(docs => {
        console.log('docs inserted: ' + docs.length)
    })
    .catch(err => {
        console.log(err);
    })
