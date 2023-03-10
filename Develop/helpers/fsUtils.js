const { fileURLToPath } = require('url');
const util = require('util');
const fs = require('fs');
const { param } = require('../routes');
// ReadfromFile
const readFromFile = util.promisify(fs.readFile);

// This allows a new helper function to be created in order to write a new file.
 const writeintoFile = (destination, content) =>
 fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
 err ? console.error(err) : console.info(`\nData written to ${destination}`));

// This code reads the data and then 
 const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const dataswitch = JSON.parse(data);
            dataswitch.push(content);
            writeintoFile(file, dataswitch);
        }
        });
 };

 module.exports = { writeintoFile, readAndAppend, readFromFile };