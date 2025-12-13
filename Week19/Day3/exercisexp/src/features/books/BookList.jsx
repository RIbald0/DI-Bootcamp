import { selectAllBooks , selectFantasyBooks , selectHorrorBooks , selectScienceFictionBooks } from "./booksSlice";
import { useSelector } from 'react-redux';
import { useState } from "react";


const BookList = () => {
    const [filter, setFilter] = useState('All');

    const allBooks = useSelector(selectAllBooks);
    const horrorBooks = useSelector(selectHorrorBooks);
    const fantasyBooks = useSelector(selectFantasyBooks);
    const sciFiBooks = useSelector(selectScienceFictionBooks);

    let booksToDisplay = allBooks;
    if(filter === 'Horror'){
        booksToDisplay = horrorBooks;
    } else if (filter === 'Fantasy'){
        booksToDisplay = fantasyBooks;
    } else if (filter === 'Science Fiction'){
        booksToDisplay = sciFiBooks;
    }

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => setFilter('All')}>All</button>
                <button onClick={() => setFilter('Horror')}>Horror</button>
                <button onClick={() => setFilter('Fantasy')}>Fantasy</button>
                <button onClick={() => setFilter('Science Fiction')}>Science Fiction</button>
            </div>

            <h2>Viewing: {filter}</h2>
            <ul>
                {booksToDisplay.map((book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author}
                    </li>
                )))}
            </ul>
        </div>
    )
}

export default BookList;