import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, USER_LOGOUT } from 'actions/user';

const initialState = {
  user: null,
  pending: false,
  errors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { user: null, pending: true, errors: false };
    case USER_SUCCESS:
      return { user: action.payload, pending: false, errors: false };
    case USER_FAILURE:
      return { user: null, pending: false, errors: true };
    case USER_LOGOUT:
      return { user: null, pending: false, errors: false };
    default:
      return state;
  }
};
