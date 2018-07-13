import { mockStore } from 'test/utils/mockStore';
import nock from 'nock';
import * as API from 'constants/apiConstants';
import * as actions from './usersList';

nock.disableNetConnect();

describe('userList actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('should create USERS_LIST_SUCCESS with payload', () => {
    nock(API.RANDOM_USERS)
      .get('/?results=50')
      .reply(
        200,
        { results: [{ response: 'success' }] },
        { 'Access-Control-Allow-Origin': '*' },
      );

    const expectedActions = [
      { type: actions.USERS_LIST_REQUEST },
      { type: actions.USERS_LIST_SUCCESS, payload: [{ response: 'success' }] },
    ];

    return store.dispatch(actions.requestUsersList())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
