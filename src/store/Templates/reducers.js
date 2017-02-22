import * as types from '../../constants/action-types';

const initialState = {
  shouldFetch: true,
  isFetching: false,
  error: null,
  data: [],
};

const templates = (state=initialState, action) => {
  switch (action.type) {
    case types.GET_TEMPLATE_FULFILLED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        shouldFetch: false,
      };
    case types.GET_TEMPLATE_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_TEMPLATE_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case types.SHOULD_FETCH_TEMPLATES:
      return {
        ...state,
        shouldFetch: true,
      };
    default:
      return state;
  }
};

export default templates;
