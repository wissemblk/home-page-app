import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footerimg'><img src='/LogoTitle.png' /></div>
      <div className='socialicons'>
        <a href='/'><i className='fa-brands fa-facebook'></i></a>
        <a href='/'><i className='fa-brands fa-instagram'></i></a>
        <a href='/'><i className='fa-brands fa-twitter'></i></a>
        

        </div>
        <div className='footer-nav'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About us</a></li>

          </ul>
        </div>
    </div>
  )
}

export default Footer