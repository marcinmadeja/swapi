export const SW_PLANETS_REQUEST = 'SW_PLANETS_REQUEST';
export const SW_PLANETS_SUCCESS = 'SW_PLANETS_SUCCESS';
export const SW_PLANETS_FAILURE = 'SW_PLANETS_FAILURE';

const entryRequest = () => ({ type: SW_PLANETS_REQUEST });
const entrySuccess = userResponse => ({ type: SW_PLANETS_SUCCESS, payload: userResponse });
const entryFailure = () => ({ type: SW_PLANETS_FAILURE });

export const requestSwPlanets = () => (
  (dispatch, getState, api) => {
    dispatch(entryRequest());

    api.swapi.getPlanets()
      .then(response => {
        dispatch(entrySuccess(response));
      })
      .catch(error => {
        dispatch(entryFailure());
      });
  }
);
