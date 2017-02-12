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

// Handle Should Fetch
const shouldFetchSummary = payload => ({
  type: 'SHOULD_FETCH_SUMMARY',
  payload,
});

const shouldFetchSales = payload => ({
  type: 'SHOULD_FETCH_SALES',
  payload,
});

const shouldFetchTemplates = payload => ({
  type: 'SHOULD_FETCH_TEMPLATES',
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

const shouldFetchUser = state => {
  const summary = state.summary;

  // if userDetails array is empty
  if (summary.userDetails.length === 0) {
    return true;
  }

  // if user has a new sale, force to fetch
  if (summary.shouldFetchUser) {
    return true;
  }

  // if fetching continues stop fetching again
  if (summary.isFetchingUser) {
    return false;
  }
};

const shouldFetchUserAccount = state => {
  const summary = state.summary;

  // if userDetails array is empty
  if (summary.userAccount.length === 0) {
    return true;
  }

  // if user has a new sale, force to fetch
  if (summary.shouldFetchUserAccount) {
    return true;
  }

  // if fetching continues stop fetching again
  if (summary.isFetchingUserAccount) {
    return false;
  }
};

const shouldFetchUserEarnings = state => {
  const summary = state.summary;

  // if userDetails array is empty
  if (summary.userEarnings === null) {
    return true;
  }

  // if user has a new sale, force to fetch
  if (summary.shouldFetchUserEarnings) {
    return true;
  }

  // if fetching continues stop fetching again
  if (summary.isFetchingUserEarnings) {
    return false;
  }
};

export const getUser = (username) => (dispatch, getState) => {

  if (shouldFetchUser(getState())) {
    dispatch(userPending('loading'));

    envato.userDetails({
      username,
    }, (err, result) => {
      if (err) {
        dispatch(userRejected(err));
      }

      dispatch(userFulfilled(result.user));
    });
  }

};

export const getUserAccount = () => (dispatch, getState) => {

  if (shouldFetchUserAccount(getState())) {
    dispatch(userAccountPending('loading'));

    envato.userAccount((err, result) => {
      if (err) {
        dispatch(userAccountRejected(err));
      }

      dispatch(userAccountFulfilled(result.account));
    });
  }
};

export const checkBalance = () => (dispatch, getState) => {

  envato.userAccount((err, result) => {
    if (err) {
      dispatch(userAccountRejected(err));
    }

    const state = getState();
    const availableEarnings = state.summary.userAccount.available_earnings;
    const newEarnings = result.account.available_earnings;

    // if there is new sale, update the pages and play sound
    if (newEarnings > availableEarnings) {
      dispatch(shouldFetchSummary());
      dispatch(shouldFetchTemplates());
      dispatch(shouldFetchSales());
    }

  });
};

export const getUserEarnings = () => (dispatch, getState) => {

  if (shouldFetchUserEarnings(getState())) {
    dispatch(userEarningsPending('loading'));

    envato.authorEarningsSales((err, result) => {
      if (err) {
        dispatch(userEarningsRejected(err));
      }

      dispatch(userEarningsFulfilled(result['earnings-and-sales-by-month']));
    });
  }

};
