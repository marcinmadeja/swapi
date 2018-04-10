export const SW_PEOPLE_REQUEST = 'SW_PEOPLE_REQUEST';
export const SW_PEOPLE_SUCCESS = 'SW_PEOPLE_SUCCESS';
export const SW_PEOPLE_FAILURE = 'SW_PEOPLE_FAILURE';

const entryRequest = () => ({ type: SW_PEOPLE_REQUEST });
const entrySuccess = userResponse => ({ type: SW_PEOPLE_SUCCESS, payload: userResponse });
const entryFailure = () => ({ type: SW_PEOPLE_FAILURE });

export const requestSwPeople = () => (
  (dispatch, getState, api) => {
    dispatch(entryRequest());

    api.swapi.getPeople()
      .then(response => {
        dispatch(entrySuccess(response));
      })
      .catch(error => {
        dispatch(entryFailure());
      });
  }
);

export const SW_PEOPLE_SINGLE_REQUEST = 'SW_PEOPLE_SINGLE_REQUEST';
export const SW_PEOPLE_SINGLE_SUCCESS = 'SW_PEOPLE_SINGLE_SUCCESS';
export const SW_PEOPLE_SINGLE_FAILURE = 'SW_PEOPLE_SINGLE_FAILURE';

const entryRequestSingle = () => ({ type: SW_PEOPLE_SINGLE_REQUEST });
const entrySuccessSingle = userResponse => ({ type: SW_PEOPLE_SINGLE_SUCCESS, payload: userResponse });
const entryFailureSingle = () => ({ type: SW_PEOPLE_SINGLE_FAILURE });

export const getPeopleById = (id) => (
  (dispatch, getState, api) => {
    const url = [api.swapi.getUrlById(id, 'people')];

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
