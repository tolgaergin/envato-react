import React, { Component } from 'react';

import { connect } from 'react-redux';
import { userLogin } from '../../store/Settings/actions';

import { config }  from '../../constants/api';

class Login extends Component {
  componentWillMount() {
    const code = this.props.location.query.code;

    if (code) {
      this.props.dispatch(userLogin(code));
    }
  }

  render() {
    const loginUrl = `
    https://api.envato.com/authorization
    ?response_type=code
    &client_id=${config.clientId}
    &redirect_uri=${config.redirectUri}`.replace(/\s/g, '');

    return (
      <div>
        <a href={loginUrl}>Login with Envato</a>
      </div>
    );
  }
};

export default connect()(Login);
