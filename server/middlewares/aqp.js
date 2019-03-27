const { AQP_CONFIG } = require('../utilities/data')
const aqp = require('api-query-params')

// format any req query to nice object
module.exports = function (req, res, next) {
    const { filter } = aqp(req.query, AQP_CONFIG);
    req.filter = filter;
    next();
}