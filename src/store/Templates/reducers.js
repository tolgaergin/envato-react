const initialState = {
  shouldFetch: true,
  isFetching: false,
  error: null,
  data: [],
};

const templates = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_TEMPLATE_FULFILLED':
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        shouldFetch: false,
      };
    case 'GET_TEMPLATE_PENDING':
      return {
        ...state,
        isFetching: true,
      };
    case 'GET_TEMPLATE_REJECTED':
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case 'SHOULD_FETCH_TEMPLATES':
      return {
        ...state,
        shouldFetch: true,
      };
    default:
      return state;
  }
};

export default templates;
