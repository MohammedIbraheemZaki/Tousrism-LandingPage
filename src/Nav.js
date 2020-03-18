import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Link} from  'react-router-dom';

function Nav() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav className='nav__container' >
            <div className='logo' >
              <Link to='/'>
                <p>Logo</p>
              </Link>
            </div>
            <ul className='nav__List' >
              <Link to='/' >
                HOME
              </Link>
              <Link to='/about' >
                ABOUT US
              </Link>
              <Link to='/service' >
                OUR SERVICES
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
