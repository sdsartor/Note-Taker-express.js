const express = require('express');
const apiRouter = require('./api')
const htmlRouter = require('./html')
// These are links to other js files.

const app = express();

// An api requires that the code have api after the slash.
app.use('/api', apiRouter);
app.use('/', htmlRouter)

module.exports = app;
