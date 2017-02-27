import React from 'react';

// import TextInput from '../TextInput';
import Switcher from '../Switcher';

import { SettingsList, ListItem } from './style';

const SettingsPanel = ({ handleClick, handleLogout, settings }) => (
  <div className="child">
    <SettingsList>
      {
        /*
        <ListItem>
          <TextInput
            labelText="Username"
            name="username"
            value={settings.username}
            onBlur={handleClick} />
        </ListItem>
        <li>
          <TextInput
            labelText="Token"
            name="token"
            value={settings.token}
            onBlur={handleClick} />
        </li>
        */
      }
      <ListItem>
        Sound alerts
        <Switcher
          name="sound"
          checked={settings.sound}
          onChange={handleClick} />
      </ListItem>
      <ListItem>
        Notification
        <Switcher
          name="notification"
          checked={settings.notification}
          onChange={handleClick} />
      </ListItem>
      <ListItem>
        Remind me to withdraw money
        <Switcher
          name="remind"
          checked={settings.remind}
          onChange={handleClick} />
      </ListItem>
      <ListItem>
        Hide dock icon
        <Switcher
          name="dockIcon"
          checked={settings.dockIcon}
          onChange={handleClick} />
      </ListItem>
      <ListItem>
        Launch at startup
        <Switcher
          name="startup"
          checked={settings.startup}
          onChange={handleClick} />
      </ListItem>
    </SettingsList>

    <SettingsList>
      <ListItem
        onClick={handleLogout}
        color="red"
        center>
        Log me out
      </ListItem>
    </SettingsList>
  </div>
);

SettingsPanel.propTypes = {
  handleClick: React.PropTypes.func,
  handleLogout: React.PropTypes.func,
  settings: React.PropTypes.object,
};

export default SettingsPanel;
