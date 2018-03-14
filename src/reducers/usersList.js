import { USERS_LIST_REQUEST, USERS_LIST_SUCCESS, USERS_LIST_FAILURE } from 'actions/usersList';

const initialState = {
  userList: null,
  pending: false,
  errors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_REQUEST:
      return { userList: null, pending: true, errors: false };
    case USERS_LIST_SUCCESS:
      return { userList: action.payload, pending: false, errors: false };
    case USERS_LIST_FAILURE:
      return { userList: null, pending: false, errors: true };
    default:
      return state;
  }
};
