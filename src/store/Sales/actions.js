import * as types from '../../constants/action-types';
import envato from '../../constants/api';

const salesFulfilled = payload => ({
  type: types.GET_SALES_FULFILLED,
  payload,
});

const salesPending = payload => ({
  type: types.GET_SALES_PENDING,
  payload,
});

const salesRejected = payload => ({
  type: types.GET_SALES_REJECTED,
  payload,
});

const shouldFetchSales = state => {
  const sales = state.sales;

  // if sales array is empty
  if (sales.data.length === 0) {
    return true;
  }

  // if user has a new sale, force to fetch
  if (sales.shouldFetch) {
    return true;
  }

  // if fetching stop fetching again
  if (sales.isFetching) {
    return false;
  }
};

export const getSales = () => (dispatch, getState) => {

  if (shouldFetchSales(getState())) {
    dispatch(salesPending('loading'));
    return envato.authorStatement({
      type: 'Sale',
      site: 'themeforest.net',
    }, (err, result) => {
      if (err) {
        console.log(err);
        dispatch(salesRejected(err));
      }

      dispatch(salesFulfilled(result));

    });
  }
};
