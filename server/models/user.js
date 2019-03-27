const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const projectPermission = {
    project: {
        type: mongoose.Schema.ObjectId,
        ref: 'Project',
    },
    permission: {
        type: String,
        enum: ['r', 'rw'],
        default: 'r'
    }
}

const User = new mongoose.Schema({
    username: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        required: true,
        default: 'user'
    },
    date: {
        type: Date,
        default: Date.now
    },
    projectsPermissions: { // only used if role===user
        type: [projectPermission]
    },
})

User.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, bcrypt.genSaltSync(8))
            .then(hash => {
                this.password = hash;
                return next();
            })
            .catch(err => {
                return next(err);
            })
    } else {
        return next();
    }
});

User.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', User);
