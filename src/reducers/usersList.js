import {
  USERS_LIST_REQUEST, USERS_LIST_SUCCESS, USERS_LIST_FAILURE,
  USERS_LIST_LAST_ADDED_REQUEST, USERS_LIST_LAST_ADDED_SUCCESS, USERS_LIST_LAST_ADDED_FAILURE,
  USERS_LIST_FRIENDS_REQUEST, USERS_LIST_FRIENDS_SUCCESS, USERS_LIST_FRIENDS_FAILURE,
} from 'actions/usersList';

const initialState = {
  usersList: [],
  pending: false,
  errors: false,

  usersListLast: [],
  pendingLast: false,
  errorsLast: false,

  usersListFriends: [],
  pendingFriends: false,
  errorsFriends: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_REQUEST:
      return { ...state, usersList: [], pending: true, errors: false };
    case USERS_LIST_SUCCESS:
      return { ...state, usersList: action.payload, pending: false, errors: false };
    case USERS_LIST_FAILURE:
      return { ...state, usersList: [], pending: false, errors: true };

    case USERS_LIST_LAST_ADDED_REQUEST:
      return { ...state, usersListLast: [], pendingLast: true, errorsLast: false };
    case USERS_LIST_LAST_ADDED_SUCCESS:
      return { ...state, usersListLast: action.payload, pendingLast: false, errorsLast: false };
    case USERS_LIST_LAST_ADDED_FAILURE:
      return { ...state, usersListLast: [], pendingLast: false, errorsLast: true };

    case USERS_LIST_FRIENDS_REQUEST:
      return { ...state, usersListFriends: [], pendingFriends: true, errorsFriends: false };
    case USERS_LIST_FRIENDS_SUCCESS:
      return { ...state, usersListFriends: action.payload, pendingFriends: false, errorsFriends: false };
    case USERS_LIST_FRIENDS_FAILURE:
      return { ...state, usersListFriends: [], pendingFriends: false, errorsFriends: true };

    default:
      return state;
  }
};
