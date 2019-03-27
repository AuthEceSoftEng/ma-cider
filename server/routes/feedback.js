const express = require('express');
const router = express.Router();
const { body } = require('express-validator/check');
const { validationsApply } = require('../middlewares')
const { Feedback } = require('../models')

router.post('/', [
    body('name', 'Name is required!').isString(),
    body('email', 'Mail is required!').isString().isEmail(),
    body('feedback', 'Feedback is required').isString()],
    validationsApply,
    (req, res, next) => {
        new Feedback(req.body)
            .save()
            .then(feedback => {
                return res.json({ status: 'ok' })
            })
            .catch(err => {
                next(err);
            })
    })

module.exports = router;