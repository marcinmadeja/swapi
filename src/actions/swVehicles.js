export const SW_VEHICLES_REQUEST = 'SW_VEHICLES_REQUEST';
export const SW_VEHICLES_SUCCESS = 'SW_VEHICLES_SUCCESS';
export const SW_VEHICLES_FAILURE = 'SW_VEHICLES_FAILURE';

const entryRequest = () => ({ type: SW_VEHICLES_REQUEST });
const entrySuccess = userResponse => ({ type: SW_VEHICLES_SUCCESS, payload: userResponse });
const entryFailure = () => ({ type: SW_VEHICLES_FAILURE });

export const requestSwVehicles = () => (
  (dispatch, getState, api) => {
    dispatch(entryRequest());

    api.swapi.getVehicles()
      .then(response => {
        dispatch(entrySuccess(response));
      })
      .catch(error => {
        dispatch(entryFailure());
      });
  }
);
