import { SW_FILMS_REQUEST, SW_FILMS_SUCCESS, SW_FILMS_FAILURE } from 'actions/swFilms';

const initialState = {
  filmsData: null,
  pending: false,
  errors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_FILMS_REQUEST:
      return { filmsData: null, pending: true, errors: false };
    case SW_FILMS_SUCCESS:
      return { filmsData: action.payload, pending: false, errors: false };
    case SW_FILMS_FAILURE:
      return { filmsData: null, pending: false, errors: true };
    default:
      return state;
  }
};
