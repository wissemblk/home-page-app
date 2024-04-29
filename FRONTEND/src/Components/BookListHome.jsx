import React from "react";



const CryptoList = ({ bookData}) => {
    return (
        <div className='book_list_H'>
            {bookData.map((book, index) => {
                return (
                    <bookCard
                        key={index}
                        image={book.image}
                        name={book.name}
                        link={book.link}
                    />
                );
            })}
        </div>
    );
};

export default CryptoList;