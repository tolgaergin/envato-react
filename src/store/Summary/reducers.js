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
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        userDetails: action.payload,
        isFetchingUser: false,
        shouldFetchUser: false,
      };
    case 'GET_USER_PENDING':
      return {
        ...state,
        isFetchingUser: true,
      };
    case 'GET_USER_REJECTED':
      return {
        ...state,
        isFetchingUser: false,
        error: action.payload,
      };

    case 'GET_USER_ACCOUNT_FULFILLED':
      return {
        ...state,
        userAccount: action.payload,
        isFetchingUserAccount: false,
        shouldFetchUserAccount: false,
      };
    case 'GET_USER_ACCOUNT_PENDING':
      return {
        ...state,
        isFetchingUserAccount: true,
      };
    case 'GET_USER_ACCOUNT_REJECTED':
      return {
        ...state,
        isFetchingUserAccount: false,
        error: action.payload,
      };

    case 'GET_USER_EARNINGS_FULFILLED':
      return {
        ...state,
        userEarnings: action.payload,
        isFetchingUserEarnings: false,
        shouldFetchUserEarnings: false,
      };
    case 'GET_USER_EARNINGS_PENDING':
      return {
        ...state,
        isFetchingUserEarnings: true,
      };
    case 'GET_USER_EARNINGS_REJECTED':
      return {
        ...state,
        isFetchingUserEarnings: false,
        error: action.payload,
      };
    case 'SHOULD_FETCH_SUMMARY':
      return {
        ...state,
        lastSaleDate: new Date(),
        shouldFetchUser: true,
        shouldFetchUserAccount: true,
        shouldFetchUserEarnings: true,
      };
    default:
      return state;
  }
};

export default summary;
