import * as types from '../../constants/action-types';
import { browserHistory } from 'react-router';
import { logout } from '../../auth';

import envato from '../../constants/api';

export const updateSettings = (settingsName, settingsValue) => ({
  type: types.SETTINGS_UPDATE,
  settingsName,
  settingsValue,
});

export const updatePrevPath = (prevPath) => ({
  type: types.PREVPATH_UPDATE,
  prevPath,
});

const setUserAuth = (payload) => ({
  type: types.SET_USER_AUTH,
  payload,
});

const setUserAuthPending = payload => ({
  type: types.SET_USER_AUTH_PENDING,
  payload,
});

export const userLogout = () => (dispatch, getState) => {
  if (logout()) {
    dispatch(setUserAuth(false));
    browserHistory.push('/login');
  }
};

export const userLogin = (code) => (dispatch, getState) => {
  dispatch(setUserAuthPending(true));

  return envato.authorize(code, (err, result) => {
    if (err) {
      dispatch(setUserAuthPending(false));
    }

    const keepData = {
      username: result.username,
      accessToken: result.access_token,
      refreshToken: result.refresh_token,
      expireDate: result.expireDate,
      lastLoginDate: new Date(),
      followers: '',
      sales: '',
    };

    localStorage.setItem('envado', JSON.stringify(keepData));
    dispatch(setUserAuth(true));
    browserHistory.push('/');
  });
};
