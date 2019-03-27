const { Activity } = require('../models');

/**
 * A user can create a new activity if he has write access to the relatedProject of the form
 * 
 */
exports.canICreate = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        if (res.locals.user.projectsPermissions.find(cp =>
            String(cp.project) === String(req.body.relatedProject) && cp.permission.includes('w'))) {
            next()
        } else {
            return res.status(403).json({
                message: 'You are unauthorized to create an activity for this project!'
            })
        }
    } else {
        next();
    }
}

/**
 * A user can get an activity if he has view permission for its related project
 * 
 */
exports.canIViewById = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        Activity.findById(req.params.id).select('relatedProject')
            .then(activity => {
                if (res.locals.user.projectsPermissions.find(cp => String(cp.project) === String(activity.relatedProject))) {
                    next();
                } else {
                    return res.status(403).json({
                        message: 'You are unauthorized to view this activity!'
                    })
                }
            })
            .catch(err => {
                next(err);
            })
    } else {
        next();
    }
}

/**
 *  A user can edit an activity if he has write permission for its related project
 */
exports.canIEditById = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        Activity.findById(req.params.id).select('relatedProject')
            .then(activitiy => {
                if (res.locals.user.projectsPermissions.find(cp =>
                    String(cp.project) === String(activitiy.relatedProject) && cp.permission.includes('w'))) {
                    next();
                } else {
                    return res.status(403).json({
                        message: 'You are unauthorized to edit this activity!'
                    })
                }
            })
            .catch(err => {
                next(err);
            })
    } else {
        next();
    }
}

/**
 * Finds activities according to user's projects permissions
 */
exports.authFilter = (user, activities) => {
    return new Promise((resolve, reject) => {
        if (user.role !== 'admin') {
            const allowedProjects = user.projectsPermissions.map(cp => String(cp.project));
            resolve(activities.filter(int => allowedProjects.includes(String(int.relatedProject))))
        } else {
            resolve(activities);
        }
    })
}
