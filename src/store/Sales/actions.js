import Envato from '../../envato';

const envato = Envato({
  username: 'teamfox',
  token: '7S3QE0NGJUr9MwJaLLo0usgjSrS85yLm',
});

const salesFulfilled = payload => ({
  type: 'GET_SALES_FULFILLED',
  payload,
});

const salesPending = payload => ({
  type: 'GET_SALES_PENDING',
  payload,
});

const salesRejected = payload => ({
  type: 'GET_SALES_REJECTED',
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

    envato.authorStatement({
      type: 'Sale',
      site: 'themeforest.net',
    }, (err, result) => {
      if (err) {
        dispatch(salesRejected(err));
      }

      dispatch(salesFulfilled(result));

    });
  }
};
