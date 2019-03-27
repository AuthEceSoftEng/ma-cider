const express = require('express');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const router = express.Router();
const { Project, Activity } = require('../models')
const { apq, authorization, projectsMW } = require('../middlewares')

router.use(authorization.jwt, authorization.loadMe, apq);

router.route('/')

    /**
     * @description Creates a new project
     */
    .post(projectsMW.canICreate, (req, res, next) => {
        const _project = new Project(req.body);
        _project.save()
            .then(proj => {
                return res.status(200).json(proj);
            })
            .catch(err => {
                next(err);
            })
    })

    /**
     * @description Gets all projects
     * @param req.query (optional) Defines a mongo valid query
     */
    .get((req, res, next) => {
        Project.find(req.filter)
            .then(projects => {
                return projectsMW.authFilter(res.locals.user, projects)
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
    * @description Gets a project by id
    */
    .get(projectsMW.canIViewById, (req, res, next) => {
        Project.findById(req.params.id)
            .then(project => {
                return res.status(200).json(project);
            })
            .catch(err => {
                next(err);
            })
    })

    /**
    * @description Edit a project by id
    */
    .put(projectsMW.canIEditById, (req, res, next) => {
        delete req.body._id;
        Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(proj => {
                return res.status(200).json(proj);
            })
            .catch(err => {
                next(err);
            })
    })

    /**
     * @description Delete a project by id
     */
    .delete(projectsMW.canIEditById, (req, res, next) => {
        Project.findByIdAndDelete(req.params.id)
            .then(deletedProj => {
                // Now delete all the related activities
                return Activity.find({ relatedProject: ObjectId(req.params.id) })
                    .then(activities => {
                        return Promise.all([deletedProj, ...activities.map(a => Activity.deleteActivityById(a._id))])
                    })
            })
            .then(([deletedProj, delActivities, delFilePaths]) => {
                return res.status(200).json(deletedProj);
            })
            .catch(err => {
                next(err);
            })
    });


module.exports = router;