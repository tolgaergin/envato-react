const initialState = {
  shouldFetch: true,
  isFetching: false,
  error: null,
  data: [],
};

const sales = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_SALES_FULFILLED':
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        shouldFetch: false,
      };
    case 'GET_SALES_PENDING':
      return {
        ...state,
        isFetching: true,
      };
    case 'GET_SALES_REJECTED':
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case 'SHOULD_FETCH_SALES':
      return {
        ...state,
        shouldFetch: true,
      };
    default:
      return state;
  }
};

export default sales;
