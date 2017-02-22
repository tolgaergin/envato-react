import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../store/Sales/actions';
import * as types from '../constants/action-types';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async fetch statement testing', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('create GET_SALES_FULFILLED when fetching statement has been done', () => {
    // Mocking object from server
    nock('https://api.envato.com')
      .get('/v3/market/user/statement?type=Sale&site=themeforest.net')
      .reply(200, [
        {
          date: '2017-02-16 00:34:36 +1100',
          order_id: 52422011,
          type: 'Sale',
          detail: 'Pleasure - Material Design Responsive Admin Panel (Regular License)',
          item_id: 10579013,
        },
      ]);

    // Create expected action
    const expectedAction = [
      {
        type: types.GET_SALES_PENDING,
        payload: 'loading',
      },
      {
        type: types.GET_SALES_FULFILLED,
        payload: [{
          date: '2017-02-16 00:34:36 +1100',
          order_id: 52422011,
          type: 'Sale',
          detail: 'Pleasure - Material Design Responsive Admin Panel (Regular License)',
          item_id: 10579013,
        },
        ],
      },
    ];

    // Mock store
    const store = mockStore({
      sales: {
        shouldFetch: true,
        isFetching: false,
        error: null,
        data: [],
      },
    });

    // Promise and expect
    return store.dispatch(actions.getSales())
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
