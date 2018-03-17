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
      .then(peopleData => {
        dispatch(entrySuccess(peopleData));
      })
      .catch(error => {
        dispatch(entryFailure());
      });
  }
);
