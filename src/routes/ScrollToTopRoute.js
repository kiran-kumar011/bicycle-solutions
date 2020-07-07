import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
    console.log('component did update');
    const { offsetTop } = document.getElementById(this.props.path);
    window.scrollTo({
      top: offsetTop - 10,
      behavior: 'smooth',
    });
  }

  render() {
    console.log('scroll component');
    const { component: Component, ...rest } = this.props;

    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
}

export default withRouter(ScrollToTopRoute);
