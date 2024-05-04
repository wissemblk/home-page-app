import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

function BookListG({ category }) {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchBooks();
  }, [currentPage, category]); 

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`/api/books/genres?category=${category}&page=${currentPage}`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="BookCard-genres">
        {Array.isArray(books) && books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className='pagine-genres'>
        <button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => handlePagination(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default BookListG;
