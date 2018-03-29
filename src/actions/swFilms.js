import { swapiService } from 'services';
import { SW_FILMS_UPDATE } from './swUpdate';

export const SW_FILMS_REQUEST = 'SW_FILMS_REQUEST';
export const SW_FILMS_SUCCESS = 'SW_FILMS_SUCCESS';
export const SW_FILMS_FAILURE = 'SW_FILMS_FAILURE';

const entryRequest = () => ({ type: SW_FILMS_REQUEST });
const entrySuccess = userResponse => ({ type: SW_FILMS_SUCCESS, payload: userResponse });
const entryFailure = () => ({ type: SW_FILMS_FAILURE });

export const requestSwFilms = () => (
  (dispatch, getState, api) => {
    dispatch(entryRequest());

    api.swapi.getFilms()
      .then(response => {
        dispatch(entrySuccess(response));
      })
      .catch(error => {
        dispatch(entryFailure());
      });
  }
);

export const SW_FILMS_SINGLE_REQUEST = 'SW_FILMS_SINGLE_REQUEST';
export const SW_FILMS_SINGLE_FAILURE = 'SW_FILMS_SINGLE_FAILURE';

const entryRequestSingle = () => ({ type: SW_FILMS_SINGLE_REQUEST });
const entrySuccessSingle = userResponse => ({ type: SW_FILMS_UPDATE, payload: userResponse });
const entryFailureSingle = () => ({ type: SW_FILMS_SINGLE_FAILURE });

export const getFilmById = (id) => (
  (dispatch, getState, api) => {
    const filmUrl = [api.swapi.getUrlById(id, 'films')];
    const filmsList = getState().swFilms.list;
    const filmFromStorage = filmsList.find(film => swapiService.getIdFromLink(film.url) === id);
    if (filmFromStorage) return filmFromStorage;

    dispatch(entryRequestSingle());

    api.swapi.getDataListByUrl(filmUrl)
      .then(response => {
        dispatch(entrySuccessSingle(response));
      })
      .catch(error => {
        dispatch(entryFailureSingle());
      });
  }
);
