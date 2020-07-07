import React, { useState } from 'react';
import { Link } from '@reach/router';
import { FaBars, FaTimes } from 'react-icons/fa';
import Menu from './menu';

const navItems = ['About Us', 'Services', 'Portfolio', 'FAQ', 'Contact'];
const NavBar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleNavigation = (e, item) => {
    e.preventDefault();
    const { offsetTop } = document.getElementById(item);
    window.scrollTo({
      top: offsetTop - 10,
      behavior: 'smooth',
    });
  };

  return (
    <div className="navbar-container relative">
      <div className="navbar-wrapper flex-center-space-between">
        <div>
          <Link to="/">
            <img
              style={{ width: '250px' }}
              alt="logo"
              src="https://bicyclesolutions.in/wp-content/uploads/2020/05/LogoMakr_2F1M8Y-325x77.png"
            />
          </Link>
        </div>
        <div className="navItems">
          <div className="flex-center">
            {navItems.map((item, i) => (
              <Link
                onClick={(e) =>
                  handleNavigation(e, item.toLowerCase().replace(/\s/g, '-'))
                }
                key={i}
                style={{ padding: '0 10px' }}
                to={item.toLowerCase().replace(/\s/g, '-')}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="menu" onBlur={() => console.log('blurred')}>
          {showMenu ? (
            <div>
              <div onClick={() => setShowMenu(!showMenu)}>
                <FaTimes style={{ color: '#fff', fontSize: '20px' }} />
              </div>
              <div
                onFocus={() => console.log('focused')}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100vw',
                  position: 'absolute',
                  top: '70px',
                  left: 0,
                  backgroundColor: '#fff',
                  boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {navItems.map((item, i) => (
                    <Menu
                      key={i}
                      handleNavigation={handleNavigation}
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
