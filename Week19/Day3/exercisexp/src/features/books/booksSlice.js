import { createSlice , createSelector } from '@reduxjs/toolkit';

const initialState = [
{
    id: 1,
    title: 'Dracula',
    author: 'Bram Stoker',
    genre: 'Horror',
},
{
    id: 2,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
},
{
    id: 3,
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
},
{
    id: 4,
    title: 'It',
    author: 'Stephen King',
    genre: 'Horror',
},
{
    id: 5,
    title: 'Neuromancer',
    author: 'William Gibson',
    genre: 'Science Fiction',
}
];

const booksSlice = createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {

    }
});

export const selectAllBooks = (state) => state.books;

export const selectHorrorBooks = createSelector(
    [selectAllBooks],
    (books) => books.filter((book) => book.genre === 'Horror')
);

export const selectFantasyBooks = createSelector(
    [selectAllBooks],
    (books) => books.filter((book) => book.genre === 'Fantasy')
);

export const selectScienceFictionBooks = createSelector(
    [selectAllBooks],
    (books) => books.filter((book) => book.genre === 'Science Fiction')
);

export default booksSlice.reducer;

