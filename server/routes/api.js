const express = require('express');
const router = express.Router();

router.use('/users', require('./users'))
router.use('/admins', require('./admins'))
router.use('/projects', require('./projects'))
router.use('/participants', require('./participants'))
router.use('/activities', require('./activities'))
router.use('/apps', require('./apps'))
router.use('/files', require('./files'))
router.use('/feedback', require('./feedback'))
router.use('/graphs', require('./graphs'))

module.exports = router;