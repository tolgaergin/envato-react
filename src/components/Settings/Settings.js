import React, { Component } from 'react';

class Settings extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleSettings(e);
  }

  render() {
    return (
      <div>
        <h2>Settings</h2>
        <ul>
          <li>
            <label>Sound
              <input type="checkbox" name="sound"
              checked={this.props.settings.sound}
              onChange={this.handleClick} />
            </label>
          </li>
          <li>
            <label>Notification
              <input type="checkbox" name="notification"
              checked={this.props.settings.notification}
              onChange={this.handleClick} />
            </label>
          </li>
          <li>
            <label>Dock Icon
              <input type="checkbox" name="dockIcon"
              checked={this.props.settings.dockIcon}
              onChange={this.handleClick} />
            </label>
          </li>
          <li>
            <label>Launch at Startup
              <input type="checkbox" name="startup"
              checked={this.props.settings.startup}
              onChange={this.handleClick} />
            </label>
          </li>
          <li>
            <label>Remind withdraw
              <input type="checkbox" name="remind"
              checked={this.props.settings.remind}
              onChange={this.handleClick} />
            </label>
          </li>
        </ul>
      </div>
    );
  }

};

export default Settings;
