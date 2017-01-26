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

export const getTemplates = (username) => dispatch => {
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
};
