import React from 'react';
import { IoIosSearch, IoMdHome, IoIosHelp } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { BsQuestion } from 'react-icons/bs';

const Header1 = ({}) => {
  return (
    <div
      style={{
        width: '100vw',
        // height: '35px',
        backgroundColor: 'rgba(48,48, 48,1)',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '35px' }}>
        <div
          style={{
            display: 'flex',
            width: '90%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            // backgroundColor: 'red',
          }}
        >
          <div>
            <BsQuestion
              style={{
                color: 'rgba(187,189,195,1)',
                fontSize: '25px',
                padding: '0 10px 0 10px',
              }}
            />
          </div>
          <div>
            <IoMdHome
              style={{
                color: 'rgba(187,189,195,1)',
                fontSize: '25px',
                padding: '0 10px 0 10px',
              }}
            />
          </div>
          <div>
            <IoIosSearch
              style={{
                color: 'rgba(187,189,195,1)',
                fontSize: '25px',
                padding: '0 10px 0 10px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
