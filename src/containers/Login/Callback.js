import React, { Component } from 'react';
import axios from 'axios';
import querystring from 'querystring';

import { config }  from '../../constants/api';

// keep them in localstorage
// const keepData = {
//   lastTokenTaken: new Date(),
//   refreshToken: response.data.refresh_token,
//   accessToken: response.data.access_token,
//   code,
// };
//
// localStorage.setItem('envado', JSON.stringify(keepData));
//
// const getData = JSON.parse(localStorage.getItem('envado'));
// getData.name;
//
// localStorage.removeItem('envado');

class Callback extends Component {

  componentDidMount() {
    const code = this.props.location.query.code;
    const params = querystring.stringify({
      grant_type: 'authorization_code',
      client_id: config.clientId,
      client_secret: config.clientSecret,
      code: code,
    });

    axios.post('https://api.envato.com/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => {

      const keepData = {
        lastTokenTaken: new Date(),
        refreshToken: response.data.refresh_token,
        accessToken: response.data.access_token,
        code,
      };

      localStorage.setItem('envado', JSON.stringify(keepData));
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>Hey I'm callback</div>
    );
  }
};

export default Callback;
