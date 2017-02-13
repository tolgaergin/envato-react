import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateSettings, updatePrevPath } from '../../store/Settings/actions';

import SettingsPanel from '../../components/SettingsPanel';

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
    return (
      <SettingsPanel
        settings={this.props.settings}
        handleClick={this.handleClick}
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
