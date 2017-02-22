import * as types from '../../constants/action-types';

const initialState = {
  prevPath: '/',
  settings: {
    username: 'teamfox',
    token: '7S3QE0NGJUr9MwJaLLo0usgjSrS85yLm',
    sound: true,
    notification: true,
    dockIcon: true,
    startup: false,
    remind: true,
  },
};

const settings = (state=initialState, action) => {
  switch (action.type) {
    case types.SETTINGS_UPDATE:
      const currentSettings = { ...state.settings };
      currentSettings[action.settingsName] = action.settingsValue;
      return {
        ...state,
        settings: currentSettings,
      };
    case types.PREVPATH_UPDATE:
      return {
        ...state,
        prevPath: action.prevPath,
      };
    default:
      return state;
  }
};

export default settings;
