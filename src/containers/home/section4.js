import React, { Component } from 'react';
import handle from '../../assets/images/bicycle_handle.jpg';
import footer_background from '../../assets/images/footer_background.jpg';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';

class Section4 extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            height: '50vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              width: '50%',
              backgroundColor: 'rgba(48, 48, 48, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '36vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <h2
                style={{
                  color: '#fff',
                  fontWeight: 'bolder',
                  fontSize: '22px',
                }}
              >
                MAKE AN ENQUIRY
              </h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  height: '20vh',
                  boxSizing: 'border-box',
                }}
              >
                <input
                  name="email"
                  placeholder="Email*"
                  style={{
                    width: '25vw',
                    padding: '5px 10px 5px 10px',
                    backgroundColor: 'transparent',
                    border: '0.5px solid #ccc',
                    color: '#fff',
                  }}
                />
                <input
                  name="phone"
                  placeholder="Phone*"
                  style={{
                    width: '25vw',
                    padding: '5px 10px 5px 10px',
                    backgroundColor: 'transparent',
                    border: '0.5px solid #ccc',
                  }}
                />
                <input
                  name="query"
                  placeholder="Query*"
                  style={{
                    width: '25vw',
                    padding: '5px 10px 5px 10px',
                    backgroundColor: 'transparent',
                    border: '0.5px solid #ccc',
                  }}
                />
              </div>
              <div style={{ backgroundColor: 'red' }}>
                <p
                  style={{
                    color: '#fff',
                    fontWeight: 'bolder',
                    padding: '10px 20px 10px 20px',
                  }}
                >
                  SEND MESSAGE
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: '50%' }}>
            <img
              src={handle}
              style={{ width: '100%', objectFit: 'cover', height: '50vh' }}
            />
          </div>
        </div>
        <div className="footer_background">
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '50vh',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <section style={{}}>
                <div className="maps-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.583620382025!2d77.58155447164766!3d13.1183113086135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18e725dd2c4d%3A0x41c3d84b584effa0!2sAll%20Peoples%20Church%20(North)!5e0!3m2!1sen!2sin!4v1604843812873!5m2!1sen!2sin"
                    width="350"
                    height="250"
                    frameborder="0"
                    allowfullscreen
                    aria-hidden="false"
                  />
                </div>
              </section>
            </div>
            <div
              style={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  height: '30vh',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#fff',
                }}
              >
                <h3 style={{ fontSize: '25px', fontWeight: 'bold' }}>
                  REACH US AT
                </h3>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    // width: '85%',
                    // justifyContent: 'space-between',
                  }}
                >
                  <FaEnvelope size="20px" style={{ marginRight: '20px' }} />
                  <p>support@bicyclesolutions.com</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    // width: '85%',
                  }}
                >
                  <FaPhoneAlt size="20px" style={{ marginRight: '20px' }} />
                  <p>+91 9955235788</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    // width: '85%',
                  }}
                >
                  <FaMapMarkerAlt size="20px" style={{ marginRight: '20px' }} />
                  <p>Yelahanka, Karnataka, Bangalore 560093</p>
                </div>
                <div style={{ borderBottom: '0.2px solid #ccc' }} />
                <div
                  style={{
                    width: '65%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#fff',
                  }}
                >
                  <a>
                    <FaFacebookF size={'22px'} color="#ccc" />
                  </a>
                  <a>
                    <FaInstagram size={'22px'} color="#ccc" />
                  </a>
                  <a>
                    <FaWhatsapp size={'22px'} color="#ccc" />
                  </a>
                  <a>
                    <FaTwitter size={'22px'} color="#ccc" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;
