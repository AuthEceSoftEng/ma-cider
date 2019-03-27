
const { User, } = require('../models');

exports.isUsernameAvailable = (req, res, next) => {
    User.findOne({ username: req.body.username })
        .then(user => {
            if (user) {
                return res.status(400).json({ message: 'Error: username already exists!' })
            } else {
                return next();
            }
        })
        .catch(err => {
            return next(err)
        })
}
