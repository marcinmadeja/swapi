export const SW_FILMS_UPDATE = 'SW_FILMS_UPDATE';

const updateFilmsList = list => ({ type: SW_FILMS_UPDATE, payload: list });

export const updateSwFilms = urlToUpdate => (
  (dispatch, getState, api) => {
    api.swapi.getDataListByUrl(urlToUpdate)
      .then(response => {
        dispatch(updateFilmsList(response));
      });
  }
);
