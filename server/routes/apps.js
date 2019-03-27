const express = require('express');
const router = express.Router();
const { App } = require('../models')
const { apq, authorization, appsMW } = require('../middlewares')

router.use(authorization.jwt, authorization.loadMe, apq);

router.route('/')

    /**
     * @description Creates a new app
     */
    .post(appsMW.canICreate, (req, res, next) => {
        const _app = new App(req.body);
        _app.save()
            .then(app => {
                return res.status(200).json(app);
            })
            .catch(err => {
                next(err);
            })
    })

    /**
     * @description Gets all apps
     * @param req.query (optional) Defines a mongo valid query
     */
    .get((req, res, next) => {
        App.find(req.filter)
            .then(apps => {
                return appsMW.authFilter(res.locals.user, apps)
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
    * @description Gets an app by id
    */
    .get(appsMW.canIViewById, (req, res, next) => {
        App.findById(req.params.id)
            .then(app => {
                return res.status(200).json(app);
            })
            .catch(err => {
                next(err);
            })
    })

    /**
    * @description Edit an app by id
    */
    .put(appsMW.canIEditById, (req, res, next) => {
        delete req.body._id;
        App.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(app => {
                return res.status(200).json(app);
            })
            .catch(err => {
                next(err);
            })
    });

module.exports = router;