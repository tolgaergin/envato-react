import * as types from '../../constants/action-types';

const initialState = {
  shouldFetch: true,
  isFetching: false,
  error: null,
  data: [],
};

const sales = (state=initialState, action) => {
  switch (action.type) {
    case types.GET_SALES_FULFILLED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        shouldFetch: false,
      };
    case types.GET_SALES_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_SALES_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case types.SHOULD_FETCH_SALES:
      return {
        ...state,
        shouldFetch: true,
      };
    default:
      return state;
  }
};

export default sales;
