import { mockStore } from 'test/utils/mockStore';
import nock from 'nock';
import * as API from 'constants/apiConstants';
import * as actions from './swFilms';

nock.disableNetConnect();

describe('swFilms actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  describe('entry', () => {
    it('should create SW_FILMS_REQUEST action after entryRequest fire', () => {
      expect(actions.entryRequest()).toEqual({ type: actions.SW_FILMS_REQUEST });
    });

    it('should create SW_FILMS_SUCCESS action after entrySuccess fire', () => {
      expect(actions.entrySuccess('payload')).toEqual({ type: actions.SW_FILMS_SUCCESS, payload: 'payload' });
    });

    it('should create SW_FILMS_SUCCESS action after entryFailure fire', () => {
      expect(actions.entryFailure()).toEqual({ type: actions.SW_FILMS_FAILURE });
    });

    it('create SW_FILMS_SUCCESS with payload when fetching swFilms has been done ', () => {
      nock(API.SWAPI_URL)
        .get(API.SWAPI_FILMS)
        .reply(200, { response: 'success' }, { 'Access-Control-Allow-Origin': '*' });

      const expectedActions = [
        { type: actions.SW_FILMS_REQUEST },
        { type: actions.SW_FILMS_SUCCESS, payload: { response: 'success' } },
      ];

      return store.dispatch(actions.requestSwFilms())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  it('should create SW_FILMS_FAILURE when fetching swFilms has been done', () => {
    nock(API.SWAPI_URL)
      .get(API.SWAPI_FILMS)
      .reply(404, { response: 'success' }, { 'Access-Control-Allow-Origin': '*' });

    const expectedActions = [
      { type: actions.SW_FILMS_REQUEST },
      { type: actions.SW_FILMS_FAILURE },
    ];

    return store.dispatch(actions.requestSwFilms())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  describe('sw films', () => {
    it('should create SW_FILMS_SINGLE_SUCCESS when fetching film by id', () => {
      nock(API.SWAPI_URL)
        .get('/films/1/?format=json')
        .reply(200, { response: 'success' }, { 'Access-Control-Allow-Origin': '*' });

      const expectedActions = [
        { type: actions.SW_FILMS_SINGLE_REQUEST },
        { type: actions.SW_FILMS_SINGLE_SUCCESS, payload: [{ response: 'success' }] },
      ];


      return store.dispatch(actions.getFilmById(1))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create SW_FILMS_SINGLE_FAILURE when fetching film by id', () => {
      nock(API.SWAPI_URL)
        .get('/films/1/?format=json')
        .reply(404, { response: 'success' }, { 'Access-Control-Allow-Origin': '*' });

      const expectedActions = [
        { type: actions.SW_FILMS_SINGLE_REQUEST },
        { type: actions.SW_FILMS_SINGLE_FAILURE },
      ];


      return store.dispatch(actions.getFilmById(1))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create SW_FILMS_SINGLE_REQUEST action after entryRequestSingle fire', () => {
      expect(actions.entryRequestSingle()).toEqual({ type: actions.SW_FILMS_SINGLE_REQUEST });
    });

    it('should create SW_FILMS_SINGLE_SUCCESS action after entrySuccessSingle fire', () => {
      expect(actions.entrySuccessSingle('payload')).toEqual({ type: actions.SW_FILMS_SINGLE_SUCCESS, payload: 'payload' });
    });

    it('should create SW_FILMS_SINGLE_FAILURE action after entryFailureSingle fire', () => {
      expect(actions.entryFailureSingle()).toEqual({ type: actions.SW_FILMS_SINGLE_FAILURE });
    });
  });
});
