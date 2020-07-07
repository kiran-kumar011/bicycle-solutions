import React from 'react';
import { Link } from '@reach/router';

const Menu = ({ nav, setShowMenu, showMenu, handleNavigation }) => {
  return (
    <div className="menu-item">
      <div onClick={() => setShowMenu(!showMenu)} style={{ padding: '10px 0' }}>
        <Link
          onClick={(e) =>
            handleNavigation(e, nav.toLowerCase().replace(/\s/g, '-'))
          }
          style={{ color: 'rgba(0,0,0,0.4)' }}
          to={nav.toLowerCase().replace(/\s/g, '-')}
        >
          {nav}
        </Link>
      </div>
    </div>
  );
};

export default Menu;
