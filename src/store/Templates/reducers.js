import * as types from '../../constants/action-types';

const initialState = {
  shouldFetch: true,
  isFetching: false,
  error: null,
  data: [],
};

const templates = (state=initialState, action) => {
  switch (action.type) {

    case types.TEMPLATE_SHOULD_FETCH: {
      return {
        ...state,
        shouldFetch: true,
        error: null,
      };
    }

    case types.GET_TEMPLATE_FULFILLED: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        shouldFetch: false,
        error: null,
      };
    }

    case types.GET_TEMPLATE_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case types.GET_TEMPLATE_REJECTED: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default templates;
