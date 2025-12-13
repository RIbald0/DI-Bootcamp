const { Router } = require('express');
const router = Router();

const books = [];
let nextId = 1;

router.get('/', (req, res) => {
    res.json(books);
});

router.post('/', (req, res) => {
    const { title , author , publishedYear} = req.body;
    if(!title || !author || !publishedYear) {
        res.status(404).json({message : 'Title, author and published year are missing'});
        return;
    } 

    const newBook =  { id:nextId , title , author , publishedYear};
    books.push(newBook);
    nextId++;
    res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author, publishedYear } = req.body;

    const index = books.findIndex(item => item.id === id);
    if(index === -1) {
        res.status(404).json({message : "Book to update was not found"});
        return;
    }

    books[index] = { ...books[index], title, author, publishedYear};
    res.status(200).json(books[index]);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(item => item.id === id);
    if (index === -1) {
        res.status(404).json({ message: "Book to delete was not found" });
        return;
    }

    books.splice(index, 1);
    res.status(204).send();
});

module.exports = router
