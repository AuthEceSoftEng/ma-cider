// The final layer error handler
module.exports = (error, req, res, next) => {
    let status = error.status || 500;
    if (error.status === 500 || !error.status) {
        console.log(error);
    }
    return res.status(status).json(
        {
            error: {
                message: error.status !== 500 && error.message ?
                    error.message : 'Internal server error occured. Please try again later.'
            }
        });
    // let ret = error || {};
    // if (error.status === undefined || error.status === 500) {
    //     console.log(error);
    //     let msg = process.env.NODE_ENV === 'development' ? JSON.stringify(error, Object.getOwnPropertyNames(error)) : 'Internal error occurred';
    //     ret = { errors: [{ message: msg }] }
    // }
}