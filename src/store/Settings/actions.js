export const updateSettings = (settingsName, settingsValue) => ({
  type: 'SETTINGS_UPDATE',
  settingsName,
  settingsValue,
});

export const updatePrevPath = (prevPath) => ({
  type: 'PREVPATH_UPDATE',
  prevPath,
});
