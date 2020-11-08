import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log('about');
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <h1>about</h1>
      </div>
    );
  }
}

export default About;
