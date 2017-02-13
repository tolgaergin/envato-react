import React from 'react';

import CheckboxButton from '../Form/CheckboxButton';
import InputField from '../Form/InputField';

const SettingsPanel = ({ handleClick, settings }) => (
  <div className="child">
    <h2>Settings</h2>
    <ul>
      <li>
        <InputField
          labelText="Username"
          name="username"
          value={settings.username}
          onBlur={handleClick} />
      </li>
      <li>
        <InputField
          labelText="Token"
          name="token"
          value={settings.token}
          onBlur={handleClick} />
      </li>
      <li>
        <CheckboxButton
          name="sound"
          labelText="Sound"
          checked={settings.sound}
          onChange={handleClick} />
      </li>
      <li>
        <CheckboxButton
          name="notification"
          labelText="Notification"
          checked={settings.notification}
          onChange={handleClick} />
      </li>
      <li>
        <CheckboxButton
          name="dockIcon"
          labelText="Dock Icon"
          checked={settings.dockIcon}
          onChange={handleClick} />
      </li>
      <li>
        <CheckboxButton
          name="startup"
          labelText="Launch at Startup"
          checked={settings.startup}
          onChange={handleClick} />
      </li>
      <li>
        <CheckboxButton
          name="remind"
          labelText="Remind withdraw"
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
