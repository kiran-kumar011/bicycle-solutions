import React, { Component, Suspense, lazy } from 'react';

const Services = lazy(() => import('../services'));
const Contact = lazy(() => import('../contact'));
const Faq = lazy(() => import('../faqs'));
const Portfolio = lazy(() => import('../portfolio'));
const AboutUs = lazy(() => import('../aboutUs'));

class Home extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <AboutUs />
          <Services />
          <Portfolio />
          <Faq />
          <Contact />
        </Suspense>
      </div>
    );
  }
}

export default Home;
