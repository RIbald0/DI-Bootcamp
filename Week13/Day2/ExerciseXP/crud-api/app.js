const fetchPosts = require('./data/dataService.js');

const express = require('express');

const app = express();
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})


app.get('/api/posts', async (req, res) => {
    try {
    const posts = await fetchPosts();
    res.status(200).json(posts);
    console.log('The data has been successfully retrieved and sent as a response.')
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Data could not be retrieved'});
        return;
    }
})