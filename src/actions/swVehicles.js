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

export const SW_VEHICLES_SINGLE_REQUEST = 'SW_VEHICLES_SINGLE_REQUEST';
export const SW_VEHICLES_SINGLE_SUCCESS = 'SW_VEHICLES_SINGLE_SUCCESS';
export const SW_VEHICLES_SINGLE_FAILURE = 'SW_VEHICLES_SINGLE_FAILURE';

const entryRequestSingle = () => ({ type: SW_VEHICLES_SINGLE_REQUEST });
const entrySuccessSingle = userResponse => ({ type: SW_VEHICLES_SINGLE_SUCCESS, payload: userResponse });
const entryFailureSingle = () => ({ type: SW_VEHICLES_SINGLE_FAILURE });

export const getVehicleById = (id) => (
  (dispatch, getState, api) => {
    const url = [api.swapi.getUrlById(id, 'vehicles')];
    dispatch(entryRequestSingle());

    api.swapi.getDataListByUrl(url)
      .then(response => {
        dispatch(entrySuccessSingle(response));
      })
      .catch(error => {
        dispatch(entryFailureSingle());
      });
  }
);

