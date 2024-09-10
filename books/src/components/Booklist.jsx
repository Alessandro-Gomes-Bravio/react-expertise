import Book from './Book'; // Import the Book component

const Booklist = () => {
    const books = [
        { image: "image1.jpg", title: "Kumbaya", author: "Mebumaahboi" },
        { image: "image2.jpg", title: "Get Out", author: "Earal" },
        { image: "image3.jpg", title: "Boi What De Hell Boi", author: "Earal" }
    ];

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
