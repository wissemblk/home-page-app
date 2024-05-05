import React, { useState } from 'react';

export default function Navbar() {

  
    const [books, setBooks] = useState([]);
  
    const handleSearch = (event) => {
      event.preventDefault();
      const searchTerm = event.target.elements.Q.value;
      axios.get(`http://localhost:5174/api/books/search?term=${searchTerm}`)
        .then(response => {
          setBooks(response.data);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    };
   
    
    return ( 
      <div className="header-img"> 
        <div className='nav-container'>
      <nav className="Nav">
        <a href="/" className="Nav-Title">
          <img src="/logo.png" className="Nav-img" />
        </a>
        <ul>
        <li className="SearchBar">
              <form onSubmit={handleSearch}>
                <input type="text" name="Q" placeholder="type book title" />
                <button type="submit" >
                  <img src="/magnifying-glass.png" />
                </button>
              </form>
            </li>
  
          <li className="abril-fatface-regular">
            <a href="/">HOME</a>
          </li>
         
          <li className="abril-fatface-regular">
            <a href="/">FAVOURITE</a>
          </li>

          <li className="abril-fatface-regular">
            <a href="/">ABOUT</a>
          </li>
          <li >
            <a href="/" className="logIn">
              <img src="/user.png" alt="user image" width={30} height={30}></img>
              Login
            </a>
          </li>
          <li className="font">
            <div className="SU">
              <a href="/" className="signUp">
                Sign Up for free
              </a>
            </div>
          </li>
        </ul>
      </nav>
      </div>
      </div>
     
    );
  }