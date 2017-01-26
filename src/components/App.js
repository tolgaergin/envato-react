import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './Header';

class App extends Component {

  render() {
    const navs = ['/', '/sales', '/templates', '/settings'];
    const newRoute = navs.indexOf(this.props.location.pathname);
    const prevRoute = navs.indexOf(this.props.prevPath);

    return (
      <div>
        <Header />
        <ReactCSSTransitionGroup
          component="div"
          transitionName={ (newRoute > prevRoute) ? 'fromRightToLeft' : 'fromLeftToRight' }
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname,
        })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { settings } = state;
  return {
    prevPath: settings.prevPath,
  };
};

export default connect(mapStateToProps)(App);
