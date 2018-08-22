import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    // <h6> App Footer </h6>
  return (

    <div className="container">
    <footer className="footer">


      <div className="copyright">
        <p>Copyright 2018</p>
      </div>

      <div className="footerLinks">
        <p><a href="https://github.com/StevieOh/Project4_Food-App_React">GitHub</a></p>
        <p><a href="#">About</a></p>
        <p><a href="mailto:#" >Contact</a></p>
      </div>
    </footer>
    </div>
    )
}

export default Footer;
