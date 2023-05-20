// Each of these constants add a path to other pages using key words.
const express = require('express');
const path = require('path');
const { middle } = require('./middleware/middle');
const index = require('./routes/index')

// This creates the constant used to display the port.
const PORT = process.env.PORT || 3001;

const app = express();

// This will make the code color change to suit the middle js data.
app.use(middle);
// This is the middleware neccessary to get all of the databases to communicate with the front end coding.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// this slash acknowledges that the code is wanting to use an html file.
app.use('/', index)

// This will pop up if the code is capable of being pulled by the server.
app.listen(PORT, () =>
console.log(`App is listening at http://localhost:${PORT} XD`)
);