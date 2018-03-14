import { USERS_LIST_REQUEST, USERS_LIST_SUCCESS, USERS_LIST_FAILURE } from 'actions/usersList';

const initialState = {
  usersList: null,
  pending: false,
  errors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_REQUEST:
      return { usersList: null, pending: true, errors: false };
    case USERS_LIST_SUCCESS:
      return { usersList: action.payload, pending: false, errors: false };
    case USERS_LIST_FAILURE:
      return { usersList: null, pending: false, errors: true };
    default:
      return state;
  }
};
