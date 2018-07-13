import { mockStore } from 'test/utils/mockStore';
import nock from 'nock';
import * as API from 'constants/apiConstants';
import * as actions from './user';

nock.disableNetConnect();

describe('user actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('should create USER_SUCCESS with payload', () => {
    nock(API.RANDOM_USERS)
      .get('/?results=1')
      .reply(
        200,
        { results: [{ response: 'success' }] },
        { 'Access-Control-Allow-Origin': '*' },
      );

    const expectedActions = [
      { type: actions.USER_REQUEST },
      { type: actions.USER_SUCCESS, payload: { response: 'success' } },
    ];

    return store.dispatch(actions.requestUser())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should create USER_FAILURE', () => {
    nock(API.RANDOM_USERS)
      .get(('/results=1'))
      .reply(
        { results: [{ response: 'success' }] },
        { 'Access-Control-Allow-Origin': '*' },
      );

    const expectedActions = [
      { type: actions.USER_REQUEST },
      { type: actions.USER_FAILURE },
    ];

    return store.dispatch(actions.requestUser())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

