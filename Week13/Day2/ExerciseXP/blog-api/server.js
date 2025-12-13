//Exercise 1: Building a RESTful API

const express = require('express');

const app = express()
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
})


data = [
    {
        id: 1,
        title: 'First Blog Post',
        content: 'This is my first post of my amazing blog - 1'
    },

    {
        id: 2,
        title: 'Second Blog Post',
        content: 'This is my second post of my amazing blog - 2'
    },

    {
        id: 3,
        title: 'Third Blog Post',
        content: 'This is my third post of my amazing blog - 3'
    }
]

app.get('/posts', (req, res) => {
    res.json(data)
})

app.get('/posts/:id', (req, res) => {
    const { id } = req.params
    const user = data.find(item => item.id == id);
    if(!user) {
        res.status(404).json({message: 'Post not found'});
        return;
    }
    res.json(user)
})


let nextId = 4;

app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        res.status(400).json({message: 'Title and content are required.'});
        return
    }
    const newPost = { id: nextId , title, content };
    data.push(newPost);
    nextId++;
    res.status(201).json(newPost);
})


app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const index = data.findIndex((item) => item.id == id);

    if (index === -1) {
        res.status(404).json({ message: 'Post to update not found' });
        return
    }

    data[index] = { ...data[index], title, content };

    res.status(200).json(data[index])
});

app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    const index = data.findIndex((item) => item.id == id);

    if (index === -1) {
        res.status(404).json({ message: 'post to delete not found' })
        return
    }

    data.splice(index, 1);
    res.status(204).send();
})