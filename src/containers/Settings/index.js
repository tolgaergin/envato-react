import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateSettings, updatePrevPath } from '../../store/Settings/actions';

import CheckboxButton from '../../components/Form/CheckboxButton';
import InputField from '../../components/Form/InputField';

class Settings extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(updatePrevPath(this.props.location.pathname));
  }

  handleClick(e) {

    let settingsName;
    let settingsValue;

    if (e.target.type === 'checkbox') {
      settingsName = e.target.name;
      settingsValue = e.target.checked;
    } else if (e.target.type === 'text') {
      settingsName = e.target.name;
      settingsValue = e.target.value;
    }

    this.props.dispatch(updateSettings(settingsName, settingsValue));
  }

  render() {
    const settings = this.props.settings;
    return (
      <div className="child">
        <h2>Settings</h2>
        <ul>
          <li>
            <InputField
              labelText="Username"
              name="username"
              value={settings.username}
              onBlur={this.handleClick} />
          </li>
          <li>
            <InputField
              labelText="Token"
              name="token"
              value={settings.token}
              onBlur={this.handleClick} />
          </li>
          <li>
            <CheckboxButton
              name="sound"
              labelText="Sound"
              checked={settings.sound}
              onChange={this.handleClick} />
          </li>
          <li>
            <CheckboxButton
              name="notification"
              labelText="Notification"
              checked={settings.notification}
              onChange={this.handleClick} />
          </li>
          <li>
            <CheckboxButton
              name="dockIcon"
              labelText="Dock Icon"
              checked={settings.dockIcon}
              onChange={this.handleClick} />
          </li>
          <li>
            <CheckboxButton
              name="startup"
              labelText="Launch at Startup"
              checked={settings.startup}
              onChange={this.handleClick} />
          </li>
          <li>
            <CheckboxButton
              name="remind"
              labelText="Remind withdraw"
              checked={settings.remind}
              onChange={this.handleClick} />
          </li>
        </ul>
      </div>
    );
  }

};

const mapStateToProps = state => {
  const { settings } = state;
  return {
    settings: settings.settings,
    prevPath: settings.prevPath,
  };
};

export default connect(mapStateToProps)(Settings);
