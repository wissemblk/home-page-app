import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookListG() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchBooks();
  }, [currentPage]); 

  const fetchBooksG = async () => {
    try {
      const response = await axios.get(`/api/books?genre=your_genre&page=${currentPage}`);
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
        {books.map((book) => (
          <div className="book" key={book.id}>
            
            <h2>{book.BookTitle}</h2>
            <p>{book.AuthorName}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => handlePagination(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default BookList;


//const CryptoList = ({ bookData}) => {
   // return (
     //   <div className='book_list_H'>
       //     {bookData.map((book, index) => {
         //       return (
           //         <bookCard
             //           key={index}
               //         image={book.image}
                 //       name={book.name}
                   //     link={book.link}
                    //>
                //);
            //})}
        //</div>
    //);
//};

