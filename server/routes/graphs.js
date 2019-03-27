const express = require('express');
const router = express.Router();
const queryHandler = require('../utilities/queryHandler')
const { authorization, projectsMW, validationsApply } = require('../middlewares')
const { query } = require('express-validator/check');

router.use(authorization.jwt, authorization.loadMe);

router.route('/:id') // projectId

    /**
    * @description Gets a graph of a project 
    * @param req.query.queryNum
    */
    .get(query('queryNum', 'queryNum is required and must be 1-7!').isInt({ min: 1, max: 7 }),
        validationsApply,
        projectsMW.canIViewById,
        (req, res, next) => {
            queryHandler(req.query.queryNum, req.params.id)
                .then(data => {
                    return res.json(data);
                })
                .catch(err => {
                    next(err)
                })
        })

module.exports = router;
