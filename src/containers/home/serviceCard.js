import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

const ServiceCard = ({ title, cost, description, note, note2, list }) => {
  return (
    <div className="service_card_wrapper">
      <div className="service_card_wrapper1">
        <div>
          <div
            style={{
              backgroundColor: 'rgba(255,0,0,0.9)',
              width: '100%',
              padding: '10px',
              boxSizing: 'border-box',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#fff' }}>
              {title.toUpperCase()}
            </h3>
          </div>
          <div style={{ padding: '4% 8% 4% 8%' }}>
            <div className="service_charge">
              <h3>{cost} /-*</h3>
            </div>
            <div
              style={{
                padding: '10px 0 10px 0',
                color: 'rgba(0,0,0,0.7)',
                lineHeight: '17px',
                letterSpacing: '0.1px',
              }}
            >
              <p>{description}</p>
            </div>
            <div style={{ padding: '10px 0 10px 0', color: 'rgba(0,0,0,0.8)' }}>
              <p>{note}</p>
            </div>
            <div className="service_intro">
              <p>{note2}</p>
            </div>
            <div style={{ fontStyle: 'italic', letterSpacing: '0.1px' }}>
              {list.map((item, ind) => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      padding: '5px 0 5px 0',
                    }}
                    key={item.title + ind}
                  >
                    <div style={{ position: 'relative', paddingRight: '10px' }}>
                      <FaCaretRight color="rgba(255,0,0,0.9)" size={15} />
                      <div
                        style={{ position: 'absolute', top: '0', left: '15%' }}
                      >
                        <FaCaretRight color="rgba(255,0,0,0.5)" size={15} />
                      </div>
                    </div>
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          backgroundColor: 'rgba(0,0,0,0.2)',
          padding: '10px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        <h3>BOOK SERVICE</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
