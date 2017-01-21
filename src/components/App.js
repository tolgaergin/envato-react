import React, { Component } from 'react';

import Header from './Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      settings: {
        sound: true,
        notification: true,
        dockIcon: true,
        startup: false,
        remind: true,
      },
    };

    this.handleSettings = this.handleSettings.bind(this);
  }

  handleSettings(e) {
    const settings = { ...this.state.settings };
    settings[e.target.name] = e.target.checked;
    this.setState({
      settings,
    });
  }

  render() {
    return (
      <div>
        <Header />
        {React.cloneElement(this.props.children, {
          settings: this.state.settings,
          handleSettings: this.handleSettings,
        })}
      </div>
    );
  }
}

export default App;
