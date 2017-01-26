const initialState = {
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
    default:
      return state;
  }
};

export default templates;
