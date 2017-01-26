import Envato from '../../envato';

const envato = Envato({
  username: 'teamfox',
  token: '7S3QE0NGJUr9MwJaLLo0usgjSrS85yLm',
});

// User Information

const userFulfilled = payload => ({
  type: 'GET_USER_FULFILLED',
  payload,
});

const userPending = payload => ({
  type: 'GET_USER_PENDING',
  payload,
});

const userRejected = payload => ({
  type: 'GET_USER_REJECTED',
  payload,
});

// User Account

const userAccountFulfilled = payload => ({
  type: 'GET_USER_ACCOUNT_FULFILLED',
  payload,
});

const userAccountPending = payload => ({
  type: 'GET_USER_ACCOUNT_PENDING',
  payload,
});

const userAccountRejected = payload => ({
  type: 'GET_USER_ACCOUNT_REJECTED',
  payload,
});

// Earnings
const userEarningsFulfilled = payload => ({
  type: 'GET_USER_EARNINGS_FULFILLED',
  payload,
});

const userEarningsPending = payload => ({
  type: 'GET_USER_EARNINGS_PENDING',
  payload,
});

const userEarningsRejected = payload => ({
  type: 'GET_USER_EARNINGS_REJECTED',
  payload,
});

export const getUser = (username) => dispatch => {
  dispatch(userPending('loading'));

  envato.userDetails({
    username,
  }, (err, result) => {
    if (err) {
      dispatch(userRejected(err));
    }

    dispatch(userFulfilled(result));
  });
};

export const getUserAccount = () => dispatch => {
  dispatch(userAccountPending('loading'));

  envato.userAccount((err, result) => {
    if (err) {
      dispatch(userAccountRejected(err));
    }

    dispatch(userAccountFulfilled(result));
  });
};

export const getUserEarnings = () => dispatch => {
  dispatch(userEarningsPending('loading'));

  envato.authorEarningsSales((err, result) => {
    if (err) {
      dispatch(userEarningsRejected(err));
    }

    const totalEarnings = result['earnings-and-sales-by-month'].map(month =>
      parseFloat(month.earnings))
      .reduce((total, monthlyEarnings) => total + monthlyEarnings);

    dispatch(userEarningsFulfilled(totalEarnings));
  });
};
