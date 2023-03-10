const router = require('express').Router();
const storage = require('../db/db.json');
const express = require('express');
const DB = require('../db/db.json')

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

router.post("/api/notes", async function (req, res) {
    const currentNotes = await DB.readNotes();
    let newNote = {
      id: uuid(),
      title: req.body.title,
      text: req.body.text,
    };
  
    await DB.addNote([...currentNotes, newNote]);
  
    return res.send(newNote);
  });

router.delete("/api/notes/:id", async function (req, res) {
    // separates out the note to delete based on id
    const noteToDelete = req.params.id;
    // notes already in json file
    const currentNotes = await DB.readNotes();
    // sort through notes file and create a new array minus the note in question
    const newNoteData = currentNotes.filter((note) => note.id !== noteToDelete);
  
    // sends the new array back the DB class 
    await DB.deleteNote(newNoteData);
    
    return res.send(newNoteData);
  });
  
module.exports = router;