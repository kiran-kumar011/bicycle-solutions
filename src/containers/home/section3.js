import React, { useState, useEffect } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

const Section3 = ({}) => {
  const testimonials = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const [index, setIndex] = useState(0);
  const serviceTypes = [
    'brake bleeding',
    'wheel truing',
    'suspension service',
    'drive train service',
  ];

  const showNext = (type) => {
    if (type === 'increment') {
      index !== testimonials.length - 1 ? setIndex(index + 1) : setIndex(0);
    } else {
      index !== 0 ? setIndex(index - 1) : setIndex(testimonials.length - 1);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '45vh',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'red' }}>
            <h2>SPECIFIC SERVICE</h2>
          </div>
          <div
            style={{
              display: 'flex',
              width: '85%',
              justifyContent: 'space-between',
            }}
          >
            {serviceTypes.map((item, ind) => (
              <div
                key={item}
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '35vh',
                  justifyContent: 'space-between',
                  margin: '10px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '100%',
                    backgroundColor: '#ccc',
                    boxShadow: '1px 0px 2px 1px rgba(0,0,0,0.5)',
                  }}
                ></div>
                <div>
                  <p>{item.toUpperCase()}</p>
                  <p style={{ fontSize: '10px', padding: '10px 0 10px 0' }}>
                    READ MORE
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '30vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '70vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'red',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            <h1>TESTIMONIAL</h1>
          </div>
          <div
            style={{
              width: '80%',
              wordWrap: 'break-word',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px 10px 20px',
              textAlign: 'center',
            }}
          >
            <div style={{ width: '100%' }}>
              <p>{testimonials[index]}</p>
            </div>
          </div>
          <div>
            <div
              onClick={() => showNext('decrement')}
              style={{
                position: 'absolute',
                top: '45%',
                left: '0%',
                cursor: 'pointer',
              }}
            >
              <FaCaretLeft color="rgba(0,0,0,0.6)" size={40} />
            </div>
            <div
              onClick={() => showNext('increment')}
              style={{
                position: 'absolute',
                top: '45%',
                right: '0%',
                cursor: 'pointer',
              }}
            >
              <FaCaretRight color="rgba(0,0,0,0.6)" size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
