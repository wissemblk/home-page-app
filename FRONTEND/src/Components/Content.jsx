import './Shelves.css';
import Quotes from './Quotes';
import { useState } from 'react';

export default function Content(){
    //*const [booData,setBookData] = useState([]);
    //const [currentPage,setCurrentPage] = useState(1);
    //const [booksPerPage,setBookPerPage] = useState(5);

    //fetch books

    //const lastPostIndex = currentPage * booksPerPage;
    //const firstPostIndex = lastPostIndex - booksPerPage;
    //setBookData.slice(firstPostIndex, lastPostIndex);
    return(<>
        <div className="book-container1">
            
        <h2 className="casetitle">Books Showcase</h2>

        <div className="shelf1">
                <p>this is book shelf1</p>
                
            </div>
            <div className="shelf2">
                <p>this is book shelf2</p>
               
            </div>
            <div>
                <div className="genre-shelves">
                    <ul>  <li><div className="gshelf1">coding</div></li>
                    <li><div className="gshelf2">fiction</div></li>
                    <li><div className="gshelf3">philosophy</div></li>
                   <li> <div className="gshelf4">psychologie</div></li></ul>
                  

                </div>
            </div>
        <Quotes/>
            
        </div>

        </>
    );
}