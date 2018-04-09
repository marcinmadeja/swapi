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

export const SW_STARSHIPS_SINGLE_REQUEST = 'SW_STARSHIPS_SINGLE_REQUEST';
export const SW_STARSHIPS_SINGLE_SUCCESS = 'SW_STARSHIPS_SINGLE_SUCCESS';
export const SW_STARSHIPS_SINGLE_FAILURE = 'SW_STARSHIPS_SINGLE_FAILURE';

const entryRequestSingle = () => ({ type: SW_STARSHIPS_SINGLE_REQUEST });
const entrySuccessSingle = userResponse => ({ type: SW_STARSHIPS_SINGLE_SUCCESS, payload: userResponse });
const entryFailureSingle = () => ({ type: SW_STARSHIPS_SINGLE_FAILURE });

export const getStarshipById = (id) => (
  (dispatch, getState, api) => {
    const url = [api.swapi.getUrlById(id, 'starships')];
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
