import React, { Component } from 'react';

// components
import About from '../about';
import Header from '../../components/header';
import Header2 from '../../components/header/header2';
import Section1 from './section1';
import Section2 from './section2';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log('home');
  }

  render() {
    return (
      <div style={{ width: '100vw' }}>
        <Header />
        <div className="home_container">
          <Header2 />
          <div
            style={{
              width: '100vw',
              height: '500px',
              // backgroundColor: 'red',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '90vw',
                height: '20px',
                // backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'center',
              }}
            >
              <div>
                <div>
                  <div style={{ color: '#fff', position: 'relative' }}>
                    <h1 style={{ fontSize: '60px' }}>
                      DOOR STEP <b />
                      <p style={{ paddingLeft: '80px' }}>bicycle service</p>
                    </h1>
                  </div>
                  <b />
                  <div style={{ color: '#7ef8d1c7' }}>
                    <h1 style={{ fontSize: '50px' }}>FREE PICKUP</h1>
                    <h1 style={{ fontSize: '50px' }}>
                      AND DROP
                      <b />
                      <p style={{ paddingLeft: '120px' }}>service</p>
                    </h1>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '20px',
                    backgroundColor: 'red',
                    color: '#fff',
                    fontWeight: 900,
                    width: '50%',
                    textAlign: 'center',
                    padding: '10px',
                  }}
                >
                  <p>BOOK A SERVICE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Section1 />
        <Section2 />
      </div>
    );
  }
}

export default Home;
