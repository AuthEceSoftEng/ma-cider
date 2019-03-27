const jwt = require('jsonwebtoken');
const { User } = require('../models');


exports.jwt = (req, res, next) => {
    const token = req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, process.env.JWT_SUPER_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    message: 'Failed to authenticate token.',
                });
            } else {
                req.hisToken = token;
                req.decoded = decoded; // req.decoded.userId
                next();
            }
        });
    } else {
        return res.status(403).send({
            message: 'No token provided.',
        });
    }
}

exports.loadMe = (req, res, next) => {
    User.findById(req.decoded.userId)
        .then(user => {
            if (!user) {
                return res.status(403).json({
                    message: 'Your userId was not found on server'
                })
            } else {
                res.locals.user = user;
                next();
            }
        })
        .catch(err => {
            next(err);
        })
}


exports.onlyAdminCanAccess = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        return res.status(403).json({
            message: 'Unauthorized.'
        })
    } else {
        next();
    }
}