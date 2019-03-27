require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const compression = require('compression')
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./server/routes/api');
const { errorHandler } = require('./server/middlewares');
const app = express();
const https = require('https');
const fs = require('fs');
const sslRedirect = require('./server/middlewares/sslRedirect')

// SSl redirect
if (process.env.NODE_ENV === 'production') {
    app.use(sslRedirect)
}

// Compression middleware
app.use(compression())

// File upload
app.use(fileUpload());

// Loggings and Parsing
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });

// app.use('/api', jsonServer.router('db.json'));
// Routes
app.use('/api', api);

// Error handler final layer
app.use(errorHandler);

// Serve any data (such as stream posters)
app.use('/data', express.static(path.join(__dirname, 'data')));

// Serve any static files
app.use('/en', express.static(path.join(__dirname, 'client-en/build')));
app.use('/de', express.static(path.join(__dirname, 'client-de/build')));

if (process.env.NODE_ENV === 'production') {
    // Handle React routing, return all requests to React app
    app.get('/en/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client-en/build', 'index.html'));
    });
    app.get('/de/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client-de/build', 'index.html'));
    });
    app.get('/', function (req, res) {
        res.redirect('/en')
    });
}

// Start the secure server
if (process.env.NODE_ENV === 'production') {
    https.createServer(
        {
            key: fs.readFileSync('/etc/letsencrypt/live/co-creation.mobile-age.eu/privkey.pem'),
            cert: fs.readFileSync('/etc/letsencrypt/live/co-creation.mobile-age.eu/cert.pem')
        }, app)
        .listen(443, () => console.log(`HTTPS Server Listening on port 443`))
}

// Start the non-secure server
app.listen(process.env.PORT || 80, () => console.log(`HTTP Server Listening on port ${process.env.PORT || 80}`));
