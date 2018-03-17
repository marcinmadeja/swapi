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
