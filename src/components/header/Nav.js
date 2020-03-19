import React from 'react';
import logo from '../../Images/Tourism-logo.png';
import './header.css';
import {Link} from  'react-router-dom';

function Nav() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav className='nav__container' >
            <div className='logo' >
              <Link to='/'>
                <img src={logo} alt="logo"/>
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
            {/* <div className="toggle_nav">
              <div className="toggle_animate--icon"></div>
            </div> */}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
