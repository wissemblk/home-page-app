import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

function BookListG({ genre }) {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchBooks();
  }, [currentPage, genre]); 

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`/api/books/genres?genre=${genre}&page=${currentPage}`);
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
      <div className="BookCard">
        {Array.isArray(books) && books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className='paginination'>
        <button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => handlePagination(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default BookListG;
