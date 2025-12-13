const express = require('express');
const route = require('./routes/books.js');

const app = express();
app.use(express.json());

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server run on ${PORT}`)
});

app.use('/books', route);