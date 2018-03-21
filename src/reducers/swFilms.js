import { SW_FILMS_REQUEST, SW_FILMS_SUCCESS, SW_FILMS_FAILURE } from 'actions/swFilms';
import { SW_FILMS_UPDATE } from 'actions/swUpdate';
import { swapiService } from 'services';

const initialState = {
  requestData: null,
  list: [],
  pending: false,
  errors: false,
};

const sortFilms = (a, b) => (a.episode_id >= b.episode_id ? 1 : -1);

function updateInfoAndList(payload) {
  const list = payload.results.sort(sortFilms);
  delete payload.results;

  return {
    list,
    requestData: payload,
    pending: false,
    errors: false,
  };
}

function updateList(payload, state) {
  const list = swapiService
    .removeDuplicate([...state.list, ...payload])
    .sort(sortFilms);

  return {
    ...state,
    list,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_FILMS_REQUEST:
      return { ...state, pending: true, errors: false };
    case SW_FILMS_SUCCESS:
      return updateInfoAndList(action.payload);
    case SW_FILMS_FAILURE:
      return { ...state, pending: false, errors: true };
    case SW_FILMS_UPDATE:
      return updateList(action.payload, state);
    default:
      return state;
  }
};
