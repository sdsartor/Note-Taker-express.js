const uuid = require('uuid').v1;
const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);

class cabinet {
    readNotes() {
        return readFromFile('../db/db.json', JSON.stringify(data));
    }
    writeNotes(note) {
        return writeToFile('db/db.json', JSON.stringify(data))
    }
    plusNotes(data) {
     
    }};