const express = require('express');
const router = express.Router();
const { User } = require('../models')
const { authorization, apq } = require('../middlewares')

router.use(authorization.jwt, authorization.loadMe, authorization.onlyAdminCanAccess, apq);

router.route('/user/:id')

    /**
    * @description An admin patches a user (is used to edit the users' permissions)
    * @param req.body.username
    * @param req.body.password
    */
    .put((req, res, next) => {
        User.findById(req.params.id)
            .then(user => {
                if (!user) {
                    return Promise.reject({ status: 400, message: 'User not found' })
                } else {
                    delete req.body._id;
                    return User.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('projectsPermissions.project')
                }
            })
            .then(user => {
                return res.status(200).json(user);
            })
            .catch(err => {
                next(err);
            })
    })

module.exports = router;