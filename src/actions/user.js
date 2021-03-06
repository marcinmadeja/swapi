export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';

const entryRequest = () => ({ type: USER_REQUEST });
const entrySuccess = user => ({ type: USER_SUCCESS, payload: user });
const entryFailure = () => ({ type: USER_FAILURE });

export const entryLogout = () => ({ type: USER_LOGOUT });

export const requestUser = () => (
  (dispatch, getState, api) => {
    dispatch(entryRequest());

    return api.user.signInUser()
      .then(user => {
        dispatch(entrySuccess(user));
      })
      .catch(error => {
        dispatch(entryFailure());
      });
  }
);
