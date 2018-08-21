import React from 'react';
import './index.css'

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
    <header className='header'>
    <img alt='' className="logo" src="/images/logo6.png"></img>

      <ul>
        <li><Link to='/' className='link' >Profile</Link></li>
        <li><Link to='/' className='link' >Browser</Link></li>
      </ul>
    </header>
    </div>
    )
}

export default Header;


// 