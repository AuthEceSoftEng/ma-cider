const express = require('express');
const router = express.Router();
const { Activity } = require('../models')
const { apq, authorization, activitiesMW } = require('../middlewares')

router.use(authorization.jwt, authorization.loadMe, apq);

router.route('/')

    /**
     * @description Creates a new activity
     */
    .post(activitiesMW.canICreate, (req, res, next) => {
        const _activity = new Activity(req.body);
        _activity.save()
            .then(activity => {
                return res.status(200).json(activity);
            })
            .catch(err => {
                next(err);
            })
    })

    /**
     * @description Gets all activities
     * @param req.query (optional) Defines a mongo valid query
     */
    .get((req, res, next) => {
        Activity.find(req.filter)
            .then(activities => {
                return activitiesMW.authFilter(res.locals.user, activities)
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
    * @description Gets an activity by id
    */
    .get(activitiesMW.canIViewById, (req, res, next) => {
        Activity.findById(req.params.id)
            .then(activity => {
                return res.status(200).json(activity);
            })
            .catch(err => {
                next(err);
            })
    })

    /**
    * @description Edit an activity by id
    */
    .put(activitiesMW.canIEditById, (req, res, next) => {
        delete req.body._id;
        Activity.findByIdAndUpdate(req.params.id, req.body, { new: true, overwrite: true })
            .then(activity => {
                return res.status(200).json(activity);
            })
            .catch(err => {
                next(err);
            })
    })

    /**
   * @description Delete an activity by id
   */
    .delete(activitiesMW.canIEditById, (req, res, next) => {
        Activity.deleteActivityById(req.params.id)
            .then(([delActivity, delFilePaths]) => {
                return res.status(200).json(delActivity);
            })
            .catch(err => {
                next(err);
            })
    });

module.exports = router;