const mongoose = require('mongoose');
const fs = require('fs');

const that = module.exports = {

    withFormatObjectIds: (_object) => {
        const object = { ..._object }
        for (let key in object) {
            if (mongoose.Types.ObjectId.isValid(object[key])) {
                object[key] = mongoose.Types.ObjectId(object[key]);
            }
        }
        return object;
    },

    removeFile: path => {
        return new Promise((resolve, reject) => {
            fs.unlink(path, err => {
                if (err) reject(err);
                resolve(path);
            });
        })
    },

    flattenArray: arr => {
        let result = [];
        arr.forEach(function ($val) {
            if (Array.isArray($val)) {
                result = result.concat(that.flattenArray($val));
            } else {
                result.push($val);
            }
        });
        return result;
    }

}