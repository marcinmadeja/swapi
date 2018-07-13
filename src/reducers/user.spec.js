import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, USER_LOGOUT } from 'actions/user';
import reducer, { initialState } from './user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle USER_REQUEST', () => {
    expect(reducer(undefined, {
      type: USER_REQUEST,
    })).toEqual({ user: null, pending: true, errors: false });
  });

  it('should handle USER_SUCCESS', () => {
    const payload = { payload: 'success' };
    expect(reducer(undefined, {
      type: USER_SUCCESS,
      payload,
    })).toEqual({ user: payload, pending: false, errors: false });
  });

  it('should handle USER_FAILURE', () => {
    expect(reducer(undefined, {
      type: USER_FAILURE,
    })).toEqual({ user: null, pending: false, errors: true });
  });

  it('should handle USER_LOGOUT', () => {
    expect(reducer(undefined, {
      type: USER_LOGOUT,
    })).toEqual({ user: null, pending: false, errors: false });
  });
});
