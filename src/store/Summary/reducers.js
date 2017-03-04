import * as types from '../../constants/action-types';

const initialState = {
  lastSaleDate: new Date(),
  shouldFetchUser: true,
  shouldFetchUserAccount: true,
  shouldFetchUserEarnings: true,
  isFetchingUser: false,
  isFetchingUserAccount: false,
  isFetchingUserEarnings: false,
  error: null,
  userDetails: [],
  userAccount: [],
  userEarnings: [],
};

const summary = (state=initialState, action) => {
  switch (action.type) {
    case types.USER_SHOULD_FETCH: {
      return {
        ...state,
        shouldFetchUser: true,
        shouldFetchUserAccount: true,
        shouldFetchUserEarnings: true,
        error: null,
      };
    }

    case types.GET_USER_FULFILLED: {
      return {
        ...state,
        userDetails: action.payload,
        isFetchingUser: false,
        shouldFetchUser: false,
        error: null,
      };
    }

    case types.GET_USER_PENDING: {
      return {
        ...state,
        isFetchingUser: true,
        error: null,
      };
    }

    case types.GET_USER_REJECTED: {
      return {
        ...state,
        isFetchingUser: false,
        error: action.payload,
      };
    }

    case types.GET_USER_ACCOUNT_FULFILLED: {
      return {
        ...state,
        userAccount: action.payload,
        isFetchingUserAccount: false,
        shouldFetchUserAccount: false,
        error: null,
      };
    }

    case types.GET_USER_ACCOUNT_PENDING: {
      return {
        ...state,
        isFetchingUserAccount: true,
        error: null,
      };
    }

    case types.GET_USER_ACCOUNT_REJECTED: {
      return {
        ...state,
        isFetchingUserAccount: false,
        error: action.payload,
      };
    }

    case types.GET_USER_EARNINGS_FULFILLED: {
      return {
        ...state,
        userEarnings: action.payload,
        isFetchingUserEarnings: false,
        shouldFetchUserEarnings: false,
        error: null,
      };
    }

    case types.GET_USER_EARNINGS_PENDING: {
      return {
        ...state,
        isFetchingUserEarnings: true,
        error: null,
      };
    }

    case types.GET_USER_EARNINGS_REJECTED: {
      return {
        ...state,
        isFetchingUserEarnings: false,
        error: action.payload,
      };
    }

    case types.SHOULD_FETCH_SUMMARY: {
      return {
        ...state,
        lastSaleDate: new Date(),
        shouldFetchUser: true,
        shouldFetchUserAccount: true,
        shouldFetchUserEarnings: true,
      };
    }

    case types.SET_USER_FOLLOWERS: {
      const currentUserDetails = { ...state.userDetails };
      currentUserDetails.previousFollowers = currentUserDetails.followers;
      currentUserDetails.followers = action.payload;
      return {
        ...state,
        userDetails: currentUserDetails,
      };
    }

    case types.SET_USER_SALES: {
      const currentUserDetails = { ...state.userDetails };
      currentUserDetails.previousSales = currentUserDetails.sales;
      currentUserDetails.sales = action.payload;
      return {
        ...state,
        userDetails: currentUserDetails,
      };
    }

    default:
      return state;
  }
};

export default summary;
