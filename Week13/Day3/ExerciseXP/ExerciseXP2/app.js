const express = require('express');
const router = require('./routes/todos.js')

const app = express();
app.use(express.json());

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server run on ${PORT}`);
});

app.use('/todos', router)