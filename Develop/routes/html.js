const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;

// Similar to server.js, this page is used to bring all of the html pages together and mainly for html pages to route back to one place.