import * as types from '../../constants/action-types';
import envato from '../../constants/api';
import { getTokens, setTokens } from '../../auth';

// User Information

const userFulfilled = payload => ({
  type: types.GET_USER_FULFILLED,
  payload,
});

const userPending = payload => ({
  type: types.GET_USER_PENDING,
  payload,
});

const userRejected = payload => ({
  type: types.GET_USER_REJECTED,
  payload,
});

// Handle Should Fetch
const shouldFetchSummary = payload => ({
  type: types.SHOULD_FETCH_SUMMARY,
  payload,
});

const shouldFetchSales = payload => ({
  type: types.SHOULD_FETCH_SALES,
  payload,
});

const shouldFetchTemplates = payload => ({
  type: types.SHOULD_FETCH_TEMPLATES,
  payload,
});

// User Account

const userAccountFulfilled = payload => ({
  type: types.GET_USER_ACCOUNT_FULFILLED,
  payload,
});

const userAccountPending = payload => ({
  type: types.GET_USER_ACCOUNT_PENDING,
  payload,
});

const userAccountRejected = payload => ({
  type: types.GET_USER_ACCOUNT_REJECTED,
  payload,
});

// Earnings
const userEarningsFulfilled = payload => ({
  type: types.GET_USER_EARNINGS_FULFILLED,
  payload,
});

const userEarningsPending = payload => ({
  type: types.GET_USER_EARNINGS_PENDING,
  payload,
});

const userEarningsRejected = payload => ({
  type: types.GET_USER_EARNINGS_REJECTED,
  payload,
});

export const userShouldFetch = payload => ({
  type: types.USER_SHOULD_FETCH,
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
    console.log('4');
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

const setUserFollowers = payload => ({
  type: types.SET_USER_FOLLOWERS,
  payload,
});

const setUserSales = payload => ({
  type: types.SET_USER_SALES,
  payload,
});

export const hideNewFollowersBadge = (followers) => (dispatch, getState) => {
  // if localStorage followers is not empty (if recently logged in it is empty)
  // and not the same with the store
  // update the store and localStorage

  let ls = getTokens();

  if (ls.followers !== '' && ls.followers !== followers) {
    ls.followers = followers;
    setTokens(ls);
    dispatch(setUserFollowers(followers));
  }
};

export const hideNewSalesBadge = (sales) => (dispatch, getState) => {
  // if localStorage sales is not empty (if recently logged in it is empty)
  // and not the same with the store
  // update the store and localStorage

  let ls = getTokens();

  if (ls.sales !== '' && ls.sales !== sales) {
    ls.sales = sales;
    setTokens(ls);
    dispatch(setUserSales(sales));
  }
};

export const getUserAccount = () => (dispatch, getState) => {

  if (shouldFetchUserAccount(getState())) {
    dispatch(userAccountPending('loading'));

    return envato.userAccount((err, result) => {
      if (err) {
        dispatch(userAccountRejected(err));
      }

      dispatch(userAccountFulfilled(result.account));
    });
  }
};

export const getUserEarnings = () => (dispatch, getState) => {

  if (shouldFetchUserEarnings(getState())) {
    dispatch(userEarningsPending('loading'));

    return envato.authorEarningsSales((err, result) => {
      if (err) {
        dispatch(userEarningsRejected(err));
      }

      dispatch(userEarningsFulfilled(result['earnings-and-sales-by-month']));
    });
  }
};

export const getUser = (username) => (dispatch, getState) => {

  if (shouldFetchUser(getState())) {
    dispatch(userPending('loading'));

    return envato.userDetails({}, (err, result) => {
      if (err) {
        dispatch(userRejected(err));
      }

      let ls = getTokens();
      let previousFollowers = ls.followers;
      let previousSales = ls.sales;

      if (!previousFollowers) {
        previousFollowers = result.user.followers;
        ls.followers = result.user.followers;
        setTokens(ls);
      }

      if (!previousSales) {
        previousSales = result.user.sales;
        ls.sales = result.user.sales;
        setTokens(ls);
      }

      result.user.previousFollowers = previousFollowers;
      result.user.previousSales = previousSales;
      dispatch(userFulfilled(result.user));

      dispatch(getUserAccount());
      dispatch(getUserEarnings());
    });
  }
};

export const checkBalance = () => (dispatch, getState) => {

  return envato.userAccount((err, result) => {
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
