import * as actions from '../store/Settings/actions';
import * as types from '../constants/action-types';

describe('action', () => {
  it('should update the settings with the value', () => {
    const settingsName = 'sound';
    const settingsValue = false;

    const expectedAction = {
      type: types.SETTINGS_UPDATE,
      settingsName,
      settingsValue,
    };

    expect(actions.updateSettings(settingsName, settingsValue))
      .toEqual(expectedAction);
  });

  it('should update the prev path', () => {
    const prevPath = 'summary';
    const expectedAction = {
      type: types.PREVPATH_UPDATE,
      prevPath,
    };

    expect(actions.updatePrevPath(prevPath))
      .toEqual(expectedAction);
  });
});
