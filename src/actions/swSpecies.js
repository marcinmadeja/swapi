export const SW_SPECIES_REQUEST = 'SW_SPECIES_REQUEST';
export const SW_SPECIES_SUCCESS = 'SW_SPECIES_SUCCESS';
export const SW_SPECIES_FAILURE = 'SW_SPECIES_FAILURE';

const entryRequest = () => ({ type: SW_SPECIES_REQUEST });
const entrySuccess = userResponse => ({ type: SW_SPECIES_SUCCESS, payload: userResponse });
const entryFailure = () => ({ type: SW_SPECIES_FAILURE });

export const requestSwSpecies = () => (
  (dispatch, getState, api) => {
    dispatch(entryRequest());

    api.swapi.getSpecies()
      .then(response => {
        dispatch(entrySuccess(response));
      })
      .catch(error => {
        dispatch(entryFailure());
      });
  }
);

export const SW_SPECIES_SINGLE_REQUEST = 'SW_SPECIES_SINGLE_REQUEST';
export const SW_SPECIES_SINGLE_SUCCESS = 'SW_SPECIES_SINGLE_SUCCESS';
export const SW_SPECIES_SINGLE_FAILURE = 'SW_SPECIES_SINGLE_FAILURE';

const entryRequestSingle = () => ({ type: SW_SPECIES_SINGLE_REQUEST });
const entrySuccessSingle = userResponse => ({ type: SW_SPECIES_SINGLE_SUCCESS, payload: userResponse });
const entryFailureSingle = () => ({ type: SW_SPECIES_SINGLE_FAILURE });

export const getSpeciesById = (id) => (
  (dispatch, getState, api) => {
    const speciesUrl = [api.swapi.getUrlById(id, 'species')];

    dispatch(entryRequestSingle());

    api.swapi.getDataListByUrl(speciesUrl)
      .then(response => {
        console.log('response', response);
        dispatch(entrySuccessSingle(response));
      })
      .catch(error => {
        dispatch(entryFailureSingle());
      });
  }
);
