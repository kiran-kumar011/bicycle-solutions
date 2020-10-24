import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

const ServiceCard = ({ title, cost, description, note, note2, list }) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: '27%',
      }}
    >
      <div
        style={{
          height: '80vh',
          paddingBottom: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            boxSizing: 'border-box',
            fontSize: '14px',
          }}
        >
          <div
            style={{
              backgroundColor: 'red',
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
          <div style={{ padding: '10px 20px 10px 20px' }}>
            <div style={{ textAlign: 'center' }}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                {cost} /-*
              </h3>
            </div>
            <div
              style={{
                padding: '10px 0 10px 0',
                color: 'rgba(0,0,0,0.8)',
                lineHeight: '17px',
                letterSpacing: '0.1px',
              }}
            >
              <p>{description}</p>
            </div>
            <div style={{ padding: '10px 0 10px 0', color: 'rgba(0,0,0,0.8)' }}>
              <p>{note}</p>
            </div>
            <div
              style={{
                padding: '10px 0 10px 0',
                color: 'rgba(0,0,0,0.8)',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
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
                      <FaCaretRight color="rgba(233, 30,99,1)" size={15} />
                      <div
                        style={{ position: 'absolute', top: '0', left: '20%' }}
                      >
                        <FaCaretRight color="rgba(233, 30,99,0.41)" size={15} />
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
          backgroundColor: 'rgba(0,0,0,0.1)',
          padding: '10px',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        <h3>Book a service</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
