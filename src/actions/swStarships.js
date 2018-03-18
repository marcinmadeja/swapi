export const SW_STARSHIPS_REQUEST = 'SW_STARSHIPS_REQUEST';
export const SW_STARSHIPS_SUCCESS = 'SW_STARSHIPS_SUCCESS';
export const SW_STARSHIPS_FAILURE = 'SW_STARSHIPS_FAILURE';

const entryRequest = () => ({ type: SW_STARSHIPS_REQUEST });
const entrySuccess = userResponse => ({ type: SW_STARSHIPS_SUCCESS, payload: userResponse });
const entryFailure = () => ({ type: SW_STARSHIPS_FAILURE });

export const requestSwStarships = () => (
  (dispatch, getState, api) => {
    dispatch(entryRequest());

    api.swapi.getStarships()
      .then(response => {
        dispatch(entrySuccess(response));
      })
      .catch(error => {
        dispatch(entryFailure());
      });
  }
);
