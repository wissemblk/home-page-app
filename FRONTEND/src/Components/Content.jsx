import './Shelves.css';
import Quotes from './Quotes';
import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import axios from 'axios';
import Pagination from './Pagination';

export default function Content() {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 10;

    useEffect(() => {
        axios.get(`http://localhost:5174/api/books`)
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const booksInRows = [];
    while (currentBooks.length > 0) {
        booksInRows.push(currentBooks.splice(0, 2));
    }
   
    const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log(currentBooks);

    const genreBooks = {};
    currentBooks.forEach(book => {
        if (!genreBooks[book.category]) {
            categoryBooks[book.category] = [];
        }
        if (categoryBooks[book.category]) {
            categoryBooks[book.category].push(book);
        }
    });

    return (
        <>
            <div className="book-container1">
                <h2 className="casetitle">Books Showcase</h2>
                <div className="shelf1">
                {booksInRows.map((row, index) => (
                        <div key={index} className="row">
                            {row.map(book => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    ))}
                    <Pagination
                booksPerPage={booksPerPage}
                totalBooks={books.length}
                paginate={paginate}
            />
                    
                </div>
                
                <div>
                    <div className="genre-shelves">
                    <ul>
                            {Object.keys(genreBooks).map((category, index) => (
                                <li key={index}>
                                    <div className={`gshelf`}>
                                        {categoryBooks[category].map(book => (
                                            <BookCard key={book.id} book={book} />
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Quotes />
            </div>
           
        </>
    );
}

