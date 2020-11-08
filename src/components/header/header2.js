import React from 'react';
import logo from '../../assets/images/logo.png';

const Header2 = ({}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: '0 20px 0 20px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '80vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <img src={logo} style={{ width: '200px' }} />
        </div>
        <div>
          <a
            href="/about-us"
            style={{ color: '#fff', padding: '0 10px 0 10px' }}
          >
            ABOUT US
          </a>
          <a
            href="/services"
            style={{ color: '#fff', padding: '0 10px 0 10px' }}
          >
            SERVICES
          </a>
          <a
            href="/contact"
            style={{ color: '#fff', padding: '0 10px 0 10px' }}
          >
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header2;
