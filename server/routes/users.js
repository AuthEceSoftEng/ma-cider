const express = require('express');
const router = express.Router();
const { User } = require('../models')
const { validations, validationsApply } = require('../middlewares')
const { body } = require('express-validator/check');
const { AQP_CONFIG } = require('../utilities/data')
const aqp = require('api-query-params')
const jwt = require('jsonwebtoken');

router.route('/')

    /**
    * @description Creates a new user
    * @param req.body.username
    * @param req.body.password
    */
    .post([
        body('username', 'Username is required!').isString().isLength({ min: 1, max: 20 }),
        body('password', 'Password is required!').isString().isLength({ min: 1, max: 20 })], validationsApply,
        validations.isUsernameAvailable,
        (req, res, next) => {
            new User(req.body)
                .save()
                .then(user => {
                    return res.status(200).json(user);
                })
                .catch(err => {
                    next(err);
                })
        })


    /**
    * @description Gets all users
    * @param req.query (optional)
    */
    .get((req, res, next) => {
        const { filter } = aqp(req.query, AQP_CONFIG);
        const { populate, ..._filter } = filter;
        User.find(_filter).populate(populate).exec()
            .then(users => {
                return res.status(200).json(users);
            })
            .catch(err => {
                next(err);
            })
    })

router.route('/authenticate')
    .post([
        body('username', 'Username is required!').isString().isLength({ min: 1, max: 20 }),
        body('password', 'Password is required!').isString().isLength({ min: 1, max: 20 })], validationsApply,
        (req, res, next) => {
            User.findOne({ username: req.body.username }).select('+password')
                .then(user => {
                    if (!user) {
                        return Promise.reject({ status: 400, message: 'User not found' })
                    } else {
                        if (user.comparePassword(req.body.password)) {
                            return res.status(200).json({
                                user: user,
                                token: jwt.sign({ userId: user._id }, process.env.JWT_SUPER_SECRET)
                            })
                        } else {
                            return Promise.reject({
                                status: 403,
                                message: 'Error: Wrong password!'
                            })
                        }
                    }
                })
                .catch(err => {
                    next(err);
                })
        })

module.exports = router;

