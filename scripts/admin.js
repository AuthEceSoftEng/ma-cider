/**
 * Usage:
 * 
 * node admin.js {username} {password} 
 */
// script to generate user with role 'admin'
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });
const { User } = require('../server/models')

if (process.argv.length < 3) {
    throw new Error('Wrong number of parameters!')
} else {
    new User({
        username: process.argv[2],
        password: process.argv[3],
        role: 'admin'
    }).save()
        .then(user => {
            console.log('User admin created!')
            process.exit()
        })
        .catch(err => {
            throw new Error(err);
        })
}
