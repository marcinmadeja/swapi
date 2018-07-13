import {
  SW_FILMS_REQUEST, SW_FILMS_SUCCESS, SW_FILMS_FAILURE,
  SW_FILMS_SINGLE_REQUEST, SW_FILMS_SINGLE_SUCCESS, SW_FILMS_SINGLE_FAILURE,
} from 'actions/swFilms';
import { reduxUtils } from 'services';

import reducer, { initialState, sortFilms } from './swFilms';

describe('swFilms reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SW_FILMS_REQUEST', () => {
    expect(reducer(initialState, {
      type: SW_FILMS_REQUEST,
    })).toEqual({
      ...initialState,
      pending: true,
      errors: false,
    });
  });

  it('should handle SW_FILMS_SUCCESS', () => {
    const payload = { results: [
      { episode_id: 1 },
      { episode_id: 2 },
      { episode_id: 3 },
    ] };

    const payload2 = { results: [
      { episode_id: 1 },
      { episode_id: 2 },
      { episode_id: 3 },
    ] };

    expect(reducer(undefined, {
      type: SW_FILMS_SUCCESS,
      payload,
    })).toEqual(reduxUtils.updateInfoAndList(
      payload2,
      initialState,
    ));
  });

  it('should handle SW_FILMS_SINGLE_REQUEST', () => {
    expect(reducer(initialState, {
      type: SW_FILMS_SINGLE_REQUEST,
    })).toEqual({
      ...initialState,
      pendingDetails: true,
      errorsDetails: false,
    });
  });

  it('should handle SW_FILMS_SINGLE_FAILURE', () => {
    expect(reducer(initialState, {
      type: SW_FILMS_SINGLE_FAILURE,
    })).toEqual({
      ...initialState,
      pendingDetails: false,
      errorsDetails: true,
    });
  });
});
