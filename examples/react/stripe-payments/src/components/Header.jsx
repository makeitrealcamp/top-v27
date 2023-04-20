import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='header__nav--homeIcon'>
          <Link to='/'>
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </div>
        <div className='header__nav--linksContainer'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='about'>About</Link>
            </li>
          </ul>
        </div>
        <Link to='cart-details'>
          <Cart />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
