import React from 'react';

import Switcher from '../Switcher';
import TextInput from '../TextInput';

import styled from 'styled-components';

const SettingsList = styled.ul `
  margin: 20px 0;
`;

const ListItem = styled.li `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #fff;
  border-top: 1px solid rgba(205, 206, 210, 0.5);

  &:last-of-type {
    border-bottom: 1px solid rgba(205, 206, 210, 0.5);
  }
`;

const SettingsPanel = ({ handleClick, settings }) => (
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
  </div>
);

SettingsPanel.propTypes = {
  handleClick: React.PropTypes.func,
  settings: React.PropTypes.object,
};

export default SettingsPanel;
