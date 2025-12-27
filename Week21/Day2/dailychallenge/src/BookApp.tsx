import { useState } from "react";

interface Book {
    id: number;
    title: string;
    author: string
};


interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
};

const List = <T,>({ items, renderItem}: ListProps<T>) => {
    return (
        <ul>
        {items.map((item, index) => (
            <li key={index}>
                {renderItem(item)}
            </li>
        ))}
        </ul>
    );
};

const BookApp: React.FC = () => {
    
    const [books, setBooks] = useState<Book[]>([
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
    ]);

    const [titleInput, setTitleInput] = useState<string>("");
    const [authorInput, setAuthorInput] = useState<string>("");

    const addBook = () => {
        if(!titleInput || !authorInput) return;

        const newBook = {
            id: Date.now(),
            title: titleInput,
            author: authorInput
        };


        setBooks([...books, newBook]);
        setTitleInput("");
        setAuthorInput("");
    };

    return (
        <div>
            <h1>Book List</h1>
            <List
            items={books}
            renderItem={(book) => (
                <div style={{ borderBottom: "1px solid #ccc", padding: "10px"}}>
                    <strong>{book.title}</strong> by {book.author}
                    </div>
            )}
            />
            <div style={{ marginTop: "20px"}}>
                <input
                type="text"
                placeholder="Book Title"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                style={{ marginRight: "10px" }}
                />

                <input
                type="text"
                placeholder="Author"
                value={authorInput}
                onChange={(e) => setAuthorInput(e.target.value)}
                style={{ marginRight: "10px" }}
                />   
                <button onClick={addBook}>Add New Book</button>           
            </div>
        </div>
    )
};

export default BookApp;