import { users } from 'constants/testConstants';
import * as actions from './swFilms';

describe('swFilms actions', () => {
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
  });

  describe('sw films', () => {
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
