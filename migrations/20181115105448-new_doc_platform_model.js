module.exports = {
  up(db) {

    // 1) Delete fieldsites collection
    db.collection('fieldsites').drop();

    // 2) Rename cocreationstreams to projects collection
    // and drop relatedFieldSite and report
    db.collection('cocreationstreams').updateMany({}, { $unset: { relatedFieldSite: "", report: "" } })
    db.collection('cocreationstreams').rename('projects')

    // 3) Rename stakeholders model
    db.collection('stakeholders').rename('participants')

    // 4) Drop tech decision
    db.collection('technicaldecisions').drop();

    // 5) Update activity model, take fields from relatedInterventions
    return db.collection('interventions').find().toArray()
      .then(interventions => {
        interventions.forEach(intervention => {
          const { date, type, length, objective, location, relatedCoCreationStream, documented } = intervention;
          db.collection('activities').updateMany({ relatedIntervention: intervention._id },
            {
              $set: {
                type,
                totalHours: length,
                objective,
                location,
                relatedProject: relatedCoCreationStream,
                isDocumented: documented,
                date: {
                  start: date,
                  end: date
                }
              },
              $rename: {
                relatedStakeholders: 'relatedParticipants',
                outcome: 'result',
                notes: 'reflection'
              },
              $unset: {
                description: "",
                supportingMaterial: "",
                relatedIntervention: ""
              }
            }
          )
        })


        // 6) Update app model
        db.collection('apps').updateMany({}, {
          $rename: {
            relatedCoCreationStream: 'relatedProject'
          }
        })

        // 7) Drop interventions model
        db.collection('interventions').drop();

      })


  },

  down(db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
