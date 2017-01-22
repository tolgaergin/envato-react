import React, { Component } from 'react';

import CheckboxButton from '../Form/CheckboxButton';
import InputField from '../Form/InputField';

class Settings extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(nextProps) {
    this.props.handlePrevPath(this.props.location.pathname);
  }

  handleClick(e) {
    this.props.handleSettings(e);
  }

  render() {
    return (
      <div className="child" style={this.props.style}>
        <h2>Settings</h2>
        <ul>
          <li>
            <InputField
              labelText="Username"
              name="username"
              value={this.props.settings.username}
              onBlur={this.handleClick} />
          </li>
          <li>
            <InputField
              labelText="Token"
              name="token"
              value={this.props.settings.token}
              onBlur={this.handleClick} />
          </li>
          <li>
            <CheckboxButton
              name="sound"
              labelText="Sound"
              checked={this.props.settings.sound}
              onChange={this.handleClick} />
          </li>
          <li>
            <CheckboxButton
              name="notification"
              labelText="Notification"
              checked={this.props.settings.notification}
              onChange={this.handleClick} />
          </li>
          <li>
            <CheckboxButton
              name="dockIcon"
              labelText="Dock Icon"
              checked={this.props.settings.dockIcon}
              onChange={this.handleClick} />
          </li>
          <li>
            <CheckboxButton
              name="startup"
              labelText="Launch at Startup"
              checked={this.props.settings.startup}
              onChange={this.handleClick} />
          </li>
          <li>
            <CheckboxButton
              name="remind"
              labelText="Remind withdraw"
              checked={this.props.settings.remind}
              onChange={this.handleClick} />
          </li>
        </ul>
      </div>
    );
  }

};

export default Settings;
