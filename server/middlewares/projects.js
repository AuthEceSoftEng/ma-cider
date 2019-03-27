
/**
 * Only admin can create a new project
 * 
 */
exports.canICreate = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        return res.status(403).json({
            message: 'Unauthorized: Only the platform admin can create a new project.'
        })
    } else {
        next();
    }
}

/**
 * A user can get a project if he has permissions 
 * 
 */
exports.canIViewById = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        if (res.locals.user.projectsPermissions.find(cp => String(cp.project) === String(req.params.id))) {
            next()
        } else {
            return res.status(403).json({
                message: 'You are unauthorized to get this project!'
            })
        }
    } else {
        next();
    }
}

/**
 * A user can edit a project if he has permissions to write
 * 
 */
exports.canIEditById = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        if (res.locals.user.projectsPermissions.find(cp =>
            String(cp.project) === String(req.params.id) && cp.permission.includes('w'))) {
            next()
        } else {
            return res.status(403).json({
                message: 'You are unauthorized to edit this project!'
            })
        }
    } else {
        next();
    }
}

/**
 * Finds projects according to user's projects permissions
 * 
 */
exports.authFilter = (user, projects) => {
    return new Promise((resolve, reject) => {
        if (user.role !== 'admin') {
            const allowedProjects = user.projectsPermissions.map(cp => String(cp.project));
            resolve(projects.filter(st => allowedProjects.includes(String(st._id))))
        } else {
            resolve(projects);
        }
    })
}
