const router = require('express').Router();
// const express = require('express');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
// This calls in the helpers to be used in the code below.


// Readfromfile allows the data to be read from inside the db.json file.
router.get('/', (req, res) => {
    readFromFile('../db/db.json')
  .then(data => {
        res.json(data)
    })
    .cath(err => {
        res.status(404).json(err)
    })
});
// The error will be thrown if the router data is unreadable, and will post notes if the code is readable.
router.post("/notes", async function (req, res) {
  //  New variable used to create a new note.
    let newNote = {
      title: req.body.title,
      text: req.body.text,
    };
  // A function that establishes the location and variable that will be placed when the data is read.
    readAndAppend(newNote, "../db/db.json");
  
    return res.send(newNote);
  });

  // This section exports the router constant and all that is in it.
module.exports = router;