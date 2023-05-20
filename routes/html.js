const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// Route made for index.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


// Route made for notes.html.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// Exports the router constant.
module.exports = router;

// Similar to server.js, this page is used to bring all of the html pages together and mainly for html pages to route back to one place.