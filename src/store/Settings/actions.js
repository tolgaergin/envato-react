import * as types from '../../constants/action-types';

export const updateSettings = (settingsName, settingsValue) => ({
  type: types.SETTINGS_UPDATE,
  settingsName,
  settingsValue,
});

export const updatePrevPath = (prevPath) => ({
  type: types.PREVPATH_UPDATE,
  prevPath,
});
