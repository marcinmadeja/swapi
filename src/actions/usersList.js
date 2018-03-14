export const USERS_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USERS_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USERS_LIST_FAILURE = 'USER_LIST_FAILURE';

const entryRequest = () => ({ type: USERS_LIST_REQUEST });
const entrySuccess = usersList => ({ type: USERS_LIST_SUCCESS, payload: usersList });
const entryFailure = () => ({ type: USERS_LIST_FAILURE });

export const requestUsersList = () => (
  (dispatch, getState, api) => {
    dispatch(entryRequest());

    api.user.getUsersList()
      .then(usersList => {
        dispatch(entrySuccess(usersList));
      })
      .catch(err => {
        dispatch(entryFailure());
      });
  }
);
