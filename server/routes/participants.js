const express = require('express');
const router = express.Router();
const { Participant } = require('../models')
const { apq, authorization, participantsMW } = require('../middlewares')

router.use(authorization.jwt, authorization.loadMe, apq);

router.route('/')

    /**
     * @description Creates a new participant
     */
    .post(participantsMW.canICreate, (req, res, next) => {
        const _participant = new Participant(req.body);
        _participant.save()
            .then(_pa => {
                return res.status(200).json(_pa);
            })
            .catch(err => {
                next(err);
            })
    })

    /**
     * @description Gets all participants
     * @param req.query (optional) Defines a mongo valid query
     */
    .get((req, res, next) => {
        Participant.find(req.filter)
            .then(participants => {
                return participantsMW.authFilter(res.locals.user, participants)
                    .then(ret => {
                        return res.status(200).json(ret);
                    })
            })
            .catch(err => {
                next(err);
            })
    });

router.route('/:id')

    /**
    * @description Gets a participant by id
    */
    .get(participantsMW.canIViewById, (req, res, next) => {
        Participant.findById(req.params.id)
            .then(participant => {
                return res.status(200).json(participant);
            })
            .catch(err => {
                next(err);
            })
    })

    /**
    * @description Edit a participant by id
    */
    .put(participantsMW.canIEditById, (req, res, next) => {
        delete req.body._id;
        Participant.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(participant => {
                return res.status(200).json(participant);
            })
            .catch(err => {
                next(err);
            })
    })

    /**
     * @description Delete a participant by id
     */
    .delete(participantsMW.canIEditById, (req, res, next) => {
        Participant.deleteParticipantById(req.params.id)
            .then(([delParticipant, delFromActivities]) => {
                return res.status(200).json(delParticipant);
            })
            .catch(err => {
                next(err);
            })
    });

module.exports = router;
