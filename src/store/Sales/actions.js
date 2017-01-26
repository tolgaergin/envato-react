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

export const getSales = () => dispatch => {
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
};
