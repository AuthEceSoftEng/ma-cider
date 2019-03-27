const express = require('express');
const router = express.Router();
const path = require('path');
const { authorization } = require('../middlewares')

router.route('/upload')

    /**
    * @description Saves a file to server
    * @param req.query.fileName 
    */
    .post(authorization.jwt, (req, res, next) => {
        if (!req.files || !req.query.fileName) {
            return res.status(400).send('No files were uploaded.');
        }

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files[req.query.fileName];

        const fileName = (new Date()).toISOString() + '_' + sampleFile.name;
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv(path.join(__dirname, '/../../data/' + fileName),
            function (err) {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    return res.status(200).json({ uri: `/data/${fileName}` })
                }
            });
    })

router.route('/download/:fileName')

    /**
   * @description Downloads a file to the browser
   */
    .get(authorization.jwt, (req, res, next) => {
        const file = path.join(__dirname, '/../../data/' + req.params.fileName);
        return res.download(file);
    })


router.route('/download-resource/:fileId')

    /**
    * @description Downloads a resource file to the browser
   */
    .get((req, res, next) => {
        const file = path.join(__dirname, '/../../data/resources/' + `${req.params.fileId}.pdf`);
        return res.download(file);
    })

module.exports = router;