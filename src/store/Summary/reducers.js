const initialState = {
  isFetchingUser: false,
  isFetchingUserAccount: false,
  isFetchingUserEarnings: false,
  error: null,
  userDetails: [],
  userAccount: [],
  userEarnings: null,
};

const summary = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        userDetails: action.payload,
        isFetchingUser: false,
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
    default:
      return state;
  }
};

export default summary;
