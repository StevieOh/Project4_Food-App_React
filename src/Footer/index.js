import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container">
    <footer className='footer'>
    <h6> App Footer </h6>
      <div className="copyright">
        <p>Copyright 2018</p>
      </div>

      <div className="footerLinks">
        <p><a href="#">GitHub</a></p>
        <p><a href="#">About</a></p>
        <p><a href="#">Contact</a></p>
      </div>
    </footer> 
    </div>
    )
}

export default Footer;


// 