export const SW_FILMS_REQUEST = 'SW_FILMS_REQUEST';
export const SW_FILMS_SUCCESS = 'SW_FILMS_SUCCESS';
export const SW_FILMS_FAILURE = 'SW_FILMS_FAILURE';

export const entryRequest = () => ({ type: SW_FILMS_REQUEST });
export const entrySuccess = userResponse => ({ type: SW_FILMS_SUCCESS, payload: userResponse });
export const entryFailure = () => ({ type: SW_FILMS_FAILURE });

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
export const SW_FILMS_SINGLE_SUCCESS = 'SW_FILMS_SINGLE_SUCCESS';
export const SW_FILMS_SINGLE_FAILURE = 'SW_FILMS_SINGLE_FAILURE';

export const entryRequestSingle = () => ({ type: SW_FILMS_SINGLE_REQUEST });
export const entrySuccessSingle = userResponse => ({ type: SW_FILMS_SINGLE_SUCCESS, payload: userResponse });
export const entryFailureSingle = () => ({ type: SW_FILMS_SINGLE_FAILURE });

export const getFilmById = (id) => (
  (dispatch, getState, api) => {
    const filmUrl = [api.swapi.getUrlById(id, 'films')];

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
