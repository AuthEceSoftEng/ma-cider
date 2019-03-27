const { App } = require('../models');

/**
 * A user can create a new app if he has write access to the relatedProject of the app's form
 * 
 */
exports.canICreate = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        if (res.locals.user.projectsPermissions.find(cp =>
            String(cp.project) === String(req.body.relatedProject) && cp.permission.includes('w'))) {
            next()
        } else {
            return res.status(403).json({
                message: 'You are unauthorized to create an app for this project!'
            })
        }
    } else {
        next();
    }
}

/**
 * A user can get an app if he has permission for its related project
 * 
 */
exports.canIViewById = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        App.findById(req.params.id).select('relatedProject')
            .then(app => {
                if (res.locals.user.projectsPermissions.find(cp => String(cp.project) === String(app.relatedProject))) {
                    next();
                } else {
                    return res.status(403).json({
                        message: 'You are unauthorized to view this app!'
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
 *  A user can edit an app if he has permission for its related project and has write permission
 */
exports.canIEditById = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        App.findById(req.params.id).select('relatedProject')
            .then(app => {
                if (res.locals.user.projectsPermissions.find(cp =>
                    String(cp.project) === String(app.relatedProject) && cp.permission.includes('w'))) {
                    next();
                } else {
                    return res.status(403).json({
                        message: 'You are unauthorized to edit this app!'
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
 * Finds apps according to user's projects permissions
 * 
 */
exports.authFilter = (user, apps) => {
    return new Promise((resolve, reject) => {
        if (user.role !== 'admin') {
            const allowedProjects = user.projectsPermissions.map(cp => String(cp.project));
            resolve(apps.filter(app => allowedProjects.includes(String(app.relatedProject))))
        } else {
            resolve(apps);
        }
    })
}
