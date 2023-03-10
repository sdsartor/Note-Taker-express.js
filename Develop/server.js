const express = require('express');
const path = require('path');
const { middle } = require('./middleware/middle');
const index = require('./routes/index')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(middle);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', index)

// app.get('/', (req, res) =>
// res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// app.get('/', (req, res) =>
// res.sendFile(path.join(__dirname, '/public/index.html'))
// );

app.listen(PORT, () =>
console.log(`App is listening at http://localhost:${PORT} XD`)
);