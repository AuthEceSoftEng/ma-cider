
/**
 * A user can create a new participant if he has any project with write permissions
 * 
 */
exports.canICreate = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        if (res.locals.user.projectsPermissions.find(cp => cp.permission.includes('w'))) {
            next()
        } else {
            return res.status(403).json({
                message: 'Unauthorized: You cannot create a new participant, as you do not have any projects permissions.'
            })
        }
    } else {
        next();
    }
}

/**
 * A user can view a participant, normally
 * 
 */
exports.canIViewById = (req, res, next) => {
    next();
}

/**
 * A user can edit a participant if he has write permission to any project
 * 
 */
exports.canIEditById = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        if (res.locals.user.projectsPermissions.find(cp => cp.permission.includes('w'))) {
            next()
        } else {
            return res.status(403).json({
                message: 'Unauthorized: You cannot create a new participant, as you do not have any projects permissions.'
            })
        }
    } else {
        next();
    }
}

/**
 * All participants are returned (no special stuff here)
 * 
 */
exports.authFilter = (user, participants) => {
    return new Promise((resolve, reject) => {
        resolve(participants)
    })
}
