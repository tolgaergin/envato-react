import Envato from '../../envato';

const envato = Envato({
  username: 'teamfox',
  token: '7S3QE0NGJUr9MwJaLLo0usgjSrS85yLm',
});

const templateFulfilled = payload => ({
  type: 'GET_TEMPLATE_FULFILLED',
  payload,
});

const templatePending = payload => ({
  type: 'GET_TEMPLATE_PENDING',
  payload,
});

const templateRejected = payload => ({
  type: 'GET_TEMPLATE_REJECTED',
  payload,
});

const shouldFetchTemplates = state => {
  const templates = state.templates;

  // if sales array is empty
  if (templates.data.length === 0) {
    return true;
  }

  // if user has a new sale, force to fetch
  if (templates.shouldFetch) {
    return true;
  }

  // if fetching stop fetching again
  if (templates.isFetching) {
    return false;
  }
};

export const getTemplates = (username) => (dispatch, getState) => {
  if (shouldFetchTemplates(getState())) {
    dispatch(templatePending(username));
    envato.authorFiles({
      username,
      site: 'ThemeForest',
    }, (err, result) => {
      if (err) {
        dispatch(templateRejected(err));
      }

      dispatch(templateFulfilled(result['new-files-from-user']));
    });
  }
};