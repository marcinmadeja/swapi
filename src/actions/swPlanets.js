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

export const SW_PLANETS_SINGLE_REQUEST = 'SW_PLANETS_SINGLE_REQUEST';
export const SW_PLANETS_SINGLE_SUCCESS = 'SW_PLANETS_SINGLE_SUCCESS';
export const SW_PLANETS_SINGLE_FAILURE = 'SW_PLANETS_SINGLE_FAILURE';

const entryRequestSingle = () => ({ type: SW_PLANETS_SINGLE_REQUEST });
const entrySuccessSingle = userResponse => ({ type: SW_PLANETS_SINGLE_SUCCESS, payload: userResponse });
const entryFailureSingle = () => ({ type: SW_PLANETS_SINGLE_FAILURE });

export const getPlanetById = (id) => (
  (dispatch, getState, api) => {
    const url = [api.swapi.getUrlById(id, 'planets')];

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
