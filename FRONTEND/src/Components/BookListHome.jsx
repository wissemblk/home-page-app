import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

function BookListG({ category }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBook();
  }, [category]); 

  const fetchBook = async () => {
    try {
      const response = await axios.get(`/api/books/genres?category=${category}&limit=1`);
      if (response.data.length > 0) {
        setBook(response.data[0]); 
      }
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };
  

  console.log('Category:', category); // Log the category value

  return (
    <div>
      {book && <BookCard key={book.bookID} book={book} />}
    </div>
  );
}

export default BookListG;
