import { configureStore } from "@reduxjs/toolkit";
import books from '../features/books/booksSlice';

const store = configureStore({
    reducer: {
        books
    }
});

export default store;