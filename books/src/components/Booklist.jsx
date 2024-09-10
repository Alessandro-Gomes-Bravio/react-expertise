import { useState } from 'react';
import Book from './Book';

const Booklist = () => {
    const [books, setBooks] = useState([
        { image: "image1.jpg", title: "kumba", author: "Mebumaahboi" },
        { image: "image2.jpg", title: "Get Out", author: "Earal" },
        { image: "image3.jpg", title: "Boi What De Hell Boi", author: "Earal" }
    ]);

    return (
        <ul>
            {books.map((book, index) => (
                <li key={index}>
                    <Book 
                        image={book.image} 
                        title={book.title} 
                        author={book.author} 
                    />
                </li>
            ))}
        </ul>
    );
}

export default Booklist;
