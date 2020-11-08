import React from 'react';
import data from './data.json';
import ServiceCard from './serviceCard';

const Section2 = () => {
  return (
    <div className="service_card_container">
      <div
        style={{
          display: 'flex',
          width: '85%',
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
