import React, { Component } from 'react';

// components
import About from '../about';
import Header from '../../components/header';
import Header2 from '../../components/header/header2';

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
              width: '40vw',
              height: '55vh',
              // backgroundColor: 'red',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <div>
              <div style={{ color: '#fff' }}>
                <h1 style={{ fontSize: '50px' }}>
                  DOOR STEP <b />
                  <p style={{ paddingLeft: '50px' }}>bicycle service</p>
                </h1>
              </div>
              <b />
              <div style={{ color: '#fff' }}>
                <h1 style={{ fontSize: '50px' }}>FREE PICKUP</h1>
                <h1 style={{ fontSize: '50px' }}>
                  AND DROP
                  <b />
                  <p style={{ paddingLeft: '35%' }}>service</p>
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: '20px',
                backgroundColor: 'red',
                color: '#fff',
                fontWeight: 900,
                width: '250px',
                textAlign: 'center',
                padding: '10px',
                margin: '20px 0 0 160px',
              }}
            >
              <p>BOOK A SERVICE</p>
            </div>
          </div>
        </div>
        {/* <About /> */}
      </div>
    );
  }
}

export default Home;
