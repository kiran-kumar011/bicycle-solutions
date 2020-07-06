import React from 'react';
import { Link } from '@reach/router';

const Menu = ({ nav, setShowMenu, showMenu }) => {
  return (
    <div style={{ color: 'rgba(0,0,0,0.4)' }}>
      <div onClick={() => setShowMenu(!showMenu)} style={{ padding: '10px 0' }}>
        <Link
          style={{ color: 'rgba(0,0,0,0.4)' }}
          to={nav.toLowerCase().replace(/\s/g, '-')}
        >
          {nav}
        </Link>
      </div>
      <div
        style={{
          border: '0.1px solid rgba(0,0,0,0.1)',
          position: 'absolute',
          left: 0,
          width: '100%',
        }}
      />
    </div>
  );
};

export default Menu;
