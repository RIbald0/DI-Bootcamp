const express = require('express');
const router = require('./routes/index.js')


const app = express();
app.use(express.json());

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Run on server ${PORT} `);
});

app.use(router);