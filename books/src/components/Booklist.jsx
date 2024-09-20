import { useState } from 'react';
import Book from './Book';
import './Booklist.css';

const Booklist = () => {
    const [books, setBooks] = useState([
        { image: "/images.png", title: "kumba", author: "Mebumaahboi" },
        { image: "/image2.jpg", title: "Get Out", author: "Earal" },
        { image: "/image3.jpg", title: "Boi What De Hell Boi", author: "Earal" }
    ]);

    return (
        <ul>
            {books.map((book, index) => (
                <li className="book" key={index}>
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
