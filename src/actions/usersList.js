export const USERS_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USERS_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USERS_LIST_FAILURE = 'USER_LIST_FAILURE';

const entryRequest = () => ({ type: USERS_LIST_REQUEST });
const entrySuccess = usersList => ({ type: USERS_LIST_SUCCESS, payload: usersList });
const entryFailure = () => ({ type: USERS_LIST_FAILURE });

export const requestUsersList = () => (
  (dispatch, getState, api) => {
    dispatch(entryRequest());

    return api.user.getUsersList()
      .then(usersList => {
        dispatch(entrySuccess(usersList));
      })
      .catch(err => {
        dispatch(entryFailure());
      });
  }
);

export const USERS_LIST_LAST_ADDED_REQUEST = 'USERS_LIST_LAST_ADDED_REQUEST';
export const USERS_LIST_LAST_ADDED_SUCCESS = 'USERS_LIST_LAST_ADDED_SUCCESS';
export const USERS_LIST_LAST_ADDED_FAILURE = 'USERS_LIST_LAST_ADDED_FAILURE';

const entryRequestLastAdded = () => ({ type: USERS_LIST_LAST_ADDED_REQUEST });
const entrySuccessLastAdded = usersList => ({ type: USERS_LIST_LAST_ADDED_SUCCESS, payload: usersList });
const entryFailureLastAdded = () => ({ type: USERS_LIST_LAST_ADDED_FAILURE });

export const requestUsersListLastAdded = () => (
  (dispatch, getState, api) => {
    dispatch(entryRequestLastAdded());

    return api.user.getUsersList()
      .then(usersList => {
        dispatch(entrySuccessLastAdded(usersList));
      })
      .catch(err => {
        dispatch(entryFailureLastAdded());
      });
  }
);

export const USERS_LIST_FRIENDS_REQUEST = 'USERS_LIST_FRIENDS_REQUEST';
export const USERS_LIST_FRIENDS_SUCCESS = 'USERS_LIST_FRIENDS_SUCCESS';
export const USERS_LIST_FRIENDS_FAILURE = 'USERS_LIST_FRIENDS_FAILURE';

const entryRequestFriends = () => ({ type: USERS_LIST_FRIENDS_REQUEST });
const entrySuccessFriends = usersList => ({ type: USERS_LIST_FRIENDS_SUCCESS, payload: usersList });
const entryFailureFriends = () => ({ type: USERS_LIST_FRIENDS_FAILURE });

export const requestUsersListFriends = () => (
  (dispatch, getState, api) => {
    dispatch(entryRequestFriends());

    return api.user.getUsersList()
      .then(usersList => {
        dispatch(entrySuccessFriends(usersList));
      })
      .catch(err => {
        dispatch(entryFailureFriends());
      });
  }
);
