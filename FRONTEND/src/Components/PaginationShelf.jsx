import React from 'react'

function PaginationShelf({totalBooks,booksPerPage }) {
    let pages = [];
    
    for(let i =1 ;i <=  Math.ceil(totalBooks/booksPerPage ) ; i++){
        pages.push(i);
    }


  return (
  <>
    <div>
        {pages.map((page,index)=>{
                return <button key={index}>{page}</button>
            }
        )}
    </div>
    </>
  )
}

export default PaginationShelf