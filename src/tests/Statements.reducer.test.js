import sales from '../store/Sales/reducers';
import * as types from '../constants/action-types';

describe('Statement reducers', () => {
  it('should return the initial state', () => {
    const initialState = {
      shouldFetch: true,
      isFetching: false,
      error: null,
      data: [],
    };

    expect(sales(undefined, {}))
      .toEqual(initialState);
  });

  it('should handle the GET_SALES_FULFILLED after fetched the data', () => {
    const fetchedState = {
      date: '2017-02-16 00:34:36 +1100',
      order_id: 52422011,
      type: 'Sale',
      detail: 'Pleasure - Material Design Responsive Admin Panel (Regular License)',
      item_id: 10579013,
    };

    expect(
      sales({}, {
        type: types.GET_SALES_FULFILLED,
        payload: fetchedState,
      })
    ).toEqual({
      data: fetchedState,
      isFetching: false,
      shouldFetch: false,
    });
  });
});
