import React from 'react';

import Switcher from '../Switcher';
import TextInput from '../TextInput';

const SettingsPanel = ({ handleClick, settings }) => (
  <div className="child">
    <h2>Settings</h2>
    <ul>
      <li>
        <TextInput
          labelText="Username"
          name="username"
          value={settings.username}
          onBlur={handleClick} />
      </li>
      <li>
        <TextInput
          labelText="Token"
          name="token"
          value={settings.token}
          onBlur={handleClick} />
      </li>
      <li>
        Sound
        <Switcher
          name="sound"
          checked={settings.sound}
          onChange={handleClick} />
      </li>
      <li>
        Notification
        <Switcher
          name="notification"
          checked={settings.notification}
          onChange={handleClick} />
      </li>
      <li>
        Dock Icon
        <Switcher
          name="dockIcon"
          checked={settings.dockIcon}
          onChange={handleClick} />
      </li>
      <li>
        Launch at Startup
        <Switcher
          name="startup"
          checked={settings.startup}
          onChange={handleClick} />
      </li>
      <li>
        Remind withdraw
        <Switcher
          name="remind"
          checked={settings.remind}
          onChange={handleClick} />
      </li>
    </ul>
  </div>
);

SettingsPanel.propTypes = {
  handleClick: React.PropTypes.func,
  settings: React.PropTypes.object,
};

export default SettingsPanel;
