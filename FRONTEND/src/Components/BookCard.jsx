import React from 'react';
import Favorite from './Fav';

function BookCard({book}) {
   //shelves.css
  return (
    <div className='book-cell'> 
    
    <a href='/' title='click to access book infos!' target="_blank" rel="noopener noreferrer"><div className='card_img' >
           <img src='/home.png' alt='book img'/>
        </div> </a>

        <div className='card_info'>
            
            <a href='/' className='shopLink'target="_blank" rel="noopener noreferrer">Link</a>
            <Favorite/>
        </div>
                
     </div>
  )
}

export default BookCard