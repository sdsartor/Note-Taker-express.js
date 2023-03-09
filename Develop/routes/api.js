const router = require('express').Router();
const storage = require('../db/db.json');


router.get('/', (req, res) => {
    storage
    .getNotes()
    .then(data => {
        res.json(data)
    })
    .cath(err => {
        res.status(404).json(err)
    })
});

router.post('/', (req, res) => {
    console.log(req.body)
    storage
    .addNote(req.body)
    .then(note => {
        res.json(note)
    })
    .catch(err => {
        res.status(404).json(err)
    })
})

router.delete('/:id', (req, res) => {
    storage
    .deleteNote(req.params.id)
    .then(() => res.json({ ok:true }))
    .catch(err => res.status(404).json(err))
})

module.exports = router;