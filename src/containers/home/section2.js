import React from 'react';
import data from './data.json';
import ServiceCard from './serviceCard';

const Section2 = ({}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(48,48, 48,1)',
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
        // padding: '20px',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '80%',
          // backgroundColor: 'red',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {data.services.map((item, ind) => {
          return <ServiceCard {...item} />;
        })}
      </div>
    </div>
  );
};

export default Section2;
