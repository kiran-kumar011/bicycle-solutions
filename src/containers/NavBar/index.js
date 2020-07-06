import React, { useState } from 'react';
import { Link } from '@reach/router';
import { FaBars, FaTimes } from 'react-icons/fa';
import Menu from './menu';

const navItems = [
  'Home',
  'About Us',
  'Services',
  'Portfolio',
  'FAQ',
  'Contact',
];
const NavBar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar-container relative">
      <div className="navbar-wrapper flex-center-space-between">
        <div>
          <Link to="/">
            <img
              style={{ width: '250px', height: '65px' }}
              alt="logo"
              src="https://bicyclesolutions.in/wp-content/uploads/2020/05/LogoMakr_2F1M8Y-325x77.png"
            />
          </Link>
        </div>
        <div className="navItems">
          <div className="flex-center">
            {navItems.map((item) => (
              <Link
                style={{ padding: '0 10px' }}
                to={item.toLowerCase().replace(/\s/g, '-')}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="menu">
          {showMenu ? (
            <div>
              <div onClick={() => setShowMenu(!showMenu)}>
                <FaTimes style={{ color: '#fff', fontSize: '20px' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100vw',
                  position: 'absolute',
                  top: '55px',
                  left: 0,
                  backgroundColor: '#fff',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    // justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {navItems.map((item) => (
                    <Menu
                      showMenu={showMenu}
                      setShowMenu={setShowMenu}
                      nav={item}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div onClick={() => setShowMenu(!showMenu)}>
              <FaBars style={{ color: '#fff', fontSize: '20px' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
