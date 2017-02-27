import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { checkBalance } from '../store/Summary/actions';

// for navigation transitions
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import header component
import Header from '../components/Header';

// import cha-ching sound and howler lib to play sound
import { Howl } from 'howler';
import chaChing from '../assets/sound/cha-ching.mp3';

// import styles
import { StyledContainer, StyledCenter } from './App.style';

class App extends Component {

  componentDidMount() {
    // Check balance every 60 seconds
    setInterval(function () {
      this.props.dispatch(checkBalance());
    }.bind(this), 60000);
  }

  componentDidUpdate(prevProps) {
    // if there is a new sale, play the sound
    if (this.props.sound && (prevProps.lastSaleDate < this.props.lastSaleDate)) {
      this.playSound();
    }
  }

  playSound() {
    const sound = new Howl({
      src: [chaChing],
    });
    sound.play();
  }

  render() {
    // set the direction of page transition
    const navs = ['/', '/sales', '/templates', '/settings'];
    const newRoute = navs.indexOf(this.props.location.pathname);
    const prevRoute = navs.indexOf(this.props.prevPath);

    return (
      <StyledContainer>
        <StyledCenter>
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
        </StyledCenter>
      </StyledContainer>
      );
  }
}

const mapStateToProps = state => {
  const { settings, summary } = state;
  return {
    prevPath: settings.prevPath,
    lastSaleDate: summary.lastSaleDate,
    sound: settings.settings.sound,

    followers: summary.userDetails.followers,
    previousFollowers: summary.userDetails.previousFollowers,

    sales: summary.userDetails.sales,
    previousSales: summary.userDetails.previousSales,
  };
};

export default connect(mapStateToProps)(App);
