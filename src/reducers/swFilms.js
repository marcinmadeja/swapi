import {
  SW_FILMS_REQUEST, SW_FILMS_SUCCESS, SW_FILMS_FAILURE,
  SW_FILMS_SINGLE_REQUEST, SW_FILMS_SINGLE_SUCCESS, SW_FILMS_SINGLE_FAILURE,
} from 'actions/swFilms';
import { SW_FILMS_UPDATE } from 'actions/swUpdate';
import { reduxUtils } from 'services';

export const initialState = {
  requestData: null,
  list: [],
  pending: false,
  errors: false,

  pendingDetails: false,
  errorsDetails: false,
};

export const sortFilms = (a, b) => (a.episode_id >= b.episode_id ? 1 : -1);

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_FILMS_REQUEST:
      return { ...state, pending: true, errors: false };
    case SW_FILMS_SUCCESS:
      return reduxUtils.updateInfoAndList(action.payload, state, sortFilms);
    case SW_FILMS_FAILURE:
      return { ...state, pending: false, errors: true };

    case SW_FILMS_SINGLE_REQUEST:
      return { ...state, pendingDetails: true, errorsDetails: false };
    case SW_FILMS_SINGLE_FAILURE:
      return { ...state, pendingDetails: false, errorsDetails: true };
    case SW_FILMS_SINGLE_SUCCESS:
      return reduxUtils.updateListByDetails(action.payload, state);

    case SW_FILMS_UPDATE:
      return reduxUtils.updateList(action.payload, state);
    default:
      return state;
  }
};
