import React from 'react';
import Favorite from './Fav';

function BookCard({ id,book }) {
   
    //if (!book || !book.title || !book.cover || !book.linkShop) {
     //   return null; 
    //}

    return (
        <div className='book-cell'> 
            <a href='/' title={`Click to get ${book.title} info card`} target="_blank" rel="noopener noreferrer">
                <div className='card_img'>
                    <img src={`/${book.cover}`}  alt={book.title} />
                </div>
            </a>
            <div className='card_info'>
                <a href={book.linkShop} className='shopLink' target="_blank" rel="noopener noreferrer">Link</a>
                <Favorite />
            </div>
        </div>
    );
}

export default BookCard;
