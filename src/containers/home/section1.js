import React from 'react';
import {
  IoIosCalendar,
  IoIosClock,
  IoIosConstruct,
  IoIosThumbsUp,
  IoMdThumbsUp,
} from 'react-icons/io';
import { FaHandshake, FaTruckMoving } from 'react-icons/fa';

const Section1 = ({}) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        height: '135vh',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          height: '90vh',
          width: '90vw',
          position: 'absolute',
          top: '-4%',
          boxShadow: '0 0 4px 4px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#d33636',
            width: '5vw',
            position: 'absolute',
            height: '230px',
            left: '-5vw',
          }}
        />
        <div
          style={{
            backgroundColor: '#fe2828',
            color: '#fff',
            paddingTop: '30px',
            paddingBottom: '30px',
            textAlign: 'center',
            paddingRight: '10px',
            paddingLeft: '10px',
            height: '220px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <h1 style={{ fontSize: '55px' }}>
            HOW
            <br />
            IT
            <br />
            WORKS
          </h1>
        </div>
        <div
          style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '85%',
              margin: '10px',
            }}
          >
            <div>
              <div style={{ position: 'relative' }}>
                <IoIosCalendar size={70} />
                <div style={{ position: 'absolute', top: '45%', left: '50%' }}>
                  <IoIosClock size={40} />
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '30px',
                justifyContent: 'space-between',
              }}
            >
              <h3 style={{ padding: '10px 0 10px 0' }}>SCHEDULE A SERVICE</h3>
              <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: '14px' }}>
                Plan a service, book a slot @your convenience. We will be happy
                to serve you
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '85%',
              margin: '10px',
            }}
          >
            <div>
              <div style={{ position: 'relative' }}>
                <IoIosConstruct size={70} />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '30px',
                justifyContent: 'space-between',
              }}
            >
              <h3 style={{ padding: '10px 0 10px 0' }}>
                COOL {'&'} CLEAR SERVICES
              </h3>
              <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: '14px' }}>
                Upon booking a slot, we either provide door step or pick and
                drop services based on the type of service you choose.
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '85%',
              margin: '10px',
            }}
          >
            <div>
              <div style={{ position: 'relative' }}>
                <FaHandshake size={70} />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '30px',
                justifyContent: 'space-between',
              }}
            >
              <h3 style={{ padding: '10px 0 10px 0' }}>LOYALTY</h3>
              <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: '14px' }}>
                We are a passionate team of cylist, who enjoy working on bike,
                there by assuring best services with safe return
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '85%',
              margin: '10px',
            }}
          >
            <div>
              <div style={{ position: 'relative' }}>
                <IoMdThumbsUp size={70} />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '30px',
                justifyContent: 'space-between',
              }}
            >
              <h3 style={{ padding: '10px 0 10px 0' }}>ASSURANCE</h3>
              <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: '14px' }}>
                We promise to deliver within 48-72 Hrs
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '85%',
              margin: '10px',
            }}
          >
            <div>
              <div style={{ position: 'relative' }}>
                <FaTruckMoving size={70} />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '30px',
                justifyContent: 'space-between',
              }}
            >
              <h3 style={{ padding: '10px 0 10px 0' }}>EXPRESS SERVICE</h3>
              <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: '14px' }}>
                24hr fast tracked and laned services for emergencies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          // position: 'absolute',
          // backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          // top: '170%',
          width: '100%',
          padding: '10px',
        }}
      >
        <div
          style={{
            width: '75%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '16px',
            // backgroundColor: 'red',
          }}
        >
          <div
            style={{
              fontStyle: 'italic',
              fontSize: 18,
              justifyContent: 'space-between',
              fontWeight: 'lighter',
              padding: 10,
            }}
          >
            <p style={{ padding: 10 }}>
              We are Ardent Lovers of the Humble Bicycle!
            </p>
            <p style={{ padding: 10 }}>
              We are genuine fast track service providers.
            </p>
            <p style={{ padding: 10 }}>
              We understand the hassle of getting bicycle serviced. From taking
              yopur bike to a workshop and the long waiting time.
              <br />
              We are here to make sure you get the best of our service at your
              doorstep thereby saving time and also letting you observe the
              complete process.
              <br />
            </p>
            <p style={{ padding: 10 }}>We cater to all kinds if Bicycles!</p>
            <p style={{ padding: 10 }}>
              Whether you are a kid riding your bicycle to school, a commuter
              nipping through traffic, a roadie who does long rides or a
              mountain biker who hits the trails.
            </p>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', padding: 10 }}>
              WE ARE HERE TO CATER FOR YOUR NEEDS !
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
