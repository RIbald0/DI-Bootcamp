interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
};

class Library {
    protected books: Book[] = [];

    public addBook(newBook: Book) {
        this.books.push(newBook)
    }

    public getBookDetails(isbn: string): string {
        const foundBook = this.books.find(book => book.isbn === isbn)
        if(foundBook){
            return `${foundBook.title}, ${foundBook.author}, ${foundBook.publishedYear}, ${foundBook.genre || "No Genre"}`
        } else {
            return "Book not found"
        }
    }
}

class DigitalLibrary extends Library {
    readonly website: string;

    constructor(website: string) {
        super()
        this.website = website
    }

    public listbooks(){
        return this.books.map(book => book.title);
    }
};


const myLibrary = new DigitalLibrary("www.mylibrary.net");
myLibrary.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publishedYear: 1925,
    genre: "Classic"
});

myLibrary.addBook({
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "9780132350884",
    publishedYear: 2008,
    genre: "Education"
});

myLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publishedYear: 1949
});

console.log(myLibrary.listbooks());
console.log(myLibrary.getBookDetails("9780451524935"));