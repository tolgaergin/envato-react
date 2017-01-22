import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './Header';

// /const slideConfig = { stiffness: 300, damping: 40 };

class App extends Component {
  constructor() {
    super();

    this.state = {
      prevPath: '/',
      settings: {
        username: 'teamfox',
        token: '7S3QE0NGJUr9MwJaLLo0usgjSrS85yLm',
        sound: true,
        notification: true,
        dockIcon: true,
        startup: false,
        remind: true,
      },
    };

    this.handleSettings = this.handleSettings.bind(this);
    this.handlePrevPath = this.handlePrevPath.bind(this);
  }

  handlePrevPath(prevPath) {
    this.setState({
      prevPath,
    });
  }

  handleSettings(e) {
    const settings = { ...this.state.settings };

    if (e.target.type === 'checkbox')
      settings[e.target.name] = e.target.checked;
    else if (e.target.type === 'text')
      settings[e.target.name] = e.target.value;

    this.setState({
      settings,
    });
  }

  render() {
    const navs = ['/', '/sales', '/templates', '/settings'];
    const newRoute = navs.indexOf(this.props.location.pathname);
    const prevRoute = navs.indexOf(this.state.prevPath);

    return (
      <div>
        <Header />
        <ReactCSSTransitionGroup
          component="div"
          transitionName={ (newRoute > prevRoute) ? 'fromRightToLeft' : 'fromLeftToRight' }
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
        {React.cloneElement(this.props.children, {
          settings: this.state.settings,
          handleSettings: this.handleSettings,
          handlePrevPath: this.handlePrevPath,
          key: this.props.location.pathname,
        })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
