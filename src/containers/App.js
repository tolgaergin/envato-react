import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkBalance } from '../store/Summary/actions';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Howl } from 'howler';

import Header from '../components/Header';

class App extends Component {

  componentDidMount() {
    // Check balance every 60 seconds
    // setInterval(function () {
    //   this.props.dispatch(checkBalance());
    // }.bind(this), 60000);
  }

  componentDidUpdate(prevProps) {

    const sound = new Howl({
      src: ['../assets/sound/cha-ching.wav'],
    });

    if (prevProps.lastSaleDate < this.props.lastSaleDate) {
      sound.play();
    }
  }

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
  const { settings, summary } = state;
  return {
    prevPath: settings.prevPath,
    lastSaleDate: summary.lastSaleDate,
  };
};

export default connect(mapStateToProps)(App);
