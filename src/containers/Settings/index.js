import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateSettings, updatePrevPath, userLogout } from '../../store/Settings/actions';

import SettingsPanel from '../../components/SettingsPanel';

const electron = window.require('electron');
electron.remote.require('fs');
const ipcRenderer = electron.ipcRenderer;

class Settings extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(updatePrevPath(this.props.location.pathname));

    //ipcRenderer example, from http://electron.atom.io/docs/api/ipc-main/
    console.log(ipcRenderer.sendSync('synchronous-message', 'synch message gonder'));

    ipcRenderer.on('asynchronous-reply', (event, arg) => {
        console.log(arg);// prints "pong"
      });
    ipcRenderer.send('asynchronous-message', 'async message gonder');

    ipcRenderer.on('authorize-user-reply', (event, arg) => {
      console.log(arg);
    });
    ipcRenderer.send('authorize-user', 'hadi');
  }

  componentWillUnmount() {
    ipcRenderer.removeAllListeners('asynchronous-reply');
    ipcRenderer.removeAllListeners('authorize-user-reply');
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

  handleLogout() {
    if (confirm('Would you like to log out?')) {
      this.props.dispatch(userLogout());
    }
  }

  render() {
    return (
      <SettingsPanel
        settings={this.props.settings}
        handleClick={this.handleClick}
        handleLogout={this.handleLogout}
        />
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
