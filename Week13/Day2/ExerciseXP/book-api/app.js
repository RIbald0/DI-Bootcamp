const express = require('express');

const app = express();
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


let books = [
    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publishedYear: 1925
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publishedYear: 1960
    },
    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        publishedYear: 1949
    }
];

let nextBookId = 4;

app.get('/api/books', (req, res) => {
    res.json(books)
})

app.get('/api/books/:bookId', (req, res) => {
    const bookIdFromUrl = req.params.bookId;
    const parsedId = parseInt(bookIdFromUrl);
    const book = books.find(item => item.id == parsedId);
    if(!book) {
        res.status(404).json({message: 'Book not found'});
        return;
    } else {
        res.json(book);
    }
});

app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
    if(!title || !author || !publishedYear) {
        res.status(400).json({message: 'Title, author and published year are required'})
        return;
    } else {
        const newBook = { id : nextBookId, title, author, publishedYear };
        books.push(newBook);
        nextBookId++;
        res.status(201).json(newBook);      
    }
});