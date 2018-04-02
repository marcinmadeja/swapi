export const SW_PEOPLE_UPDATE = 'SW_PEOPLE_UPDATE';

/* eslint-disable no-loop-func */
function handleRequestList(urlToUpdate, api, callback) {
  const allRequest = [];
  const length = urlToUpdate.length;
  if (!length) return false;

  for (let i = 0; i < length; i++) {
    setTimeout(
      () => {
        sendRequest(urlToUpdate[i], allRequest, api);
        if (i === (length - 1)) callback(allRequest);
      }, (200 * i));
  }
}
/* eslint-enable no-loop-func */

function sendRequest(url, allRequest, api) {
  const response = api.swapi.getDataByUrl(url);
  allRequest.push(response);
}

const updatePeopleList = list => ({ type: SW_PEOPLE_UPDATE, payload: list });
export const updateSwPeople = urlToUpdate => (
  (dispatch, getState, api) => {
    handleRequestList(urlToUpdate, api, allRequest => {
      api.swapi.axios.all(allRequest).then(response => {
        dispatch(updatePeopleList(response));
      });
    });
  }
);

export const SW_FILMS_UPDATE = 'SW_FILMS_UPDATE';

const updateFilmsList = list => ({ type: SW_FILMS_UPDATE, payload: list });
export const updateSwFilms = urlToUpdate => (
  (dispatch, getState, api) => {
    handleRequestList(urlToUpdate, api, allRequest => {
      api.swapi.axios.all(allRequest).then(response => {
        dispatch(updateFilmsList(response));
      });
    });
  }
);

export const SW_VEHICLES_UPDATE = 'SW_VEHICLES_UPDATE';

const updateVehiclesList = list => ({ type: SW_VEHICLES_UPDATE, payload: list });
export const updateSwVehicles = urlToUpdate => (
  (dispatch, getState, api) => {
    handleRequestList(urlToUpdate, api, allRequest => {
      api.swapi.axios.all(allRequest).then(response => {
        dispatch(updateVehiclesList(response));
      });
    });
  }
);

export const SW_STARSHIPS_UPDATE = 'SW_STARSHIPS_UPDATE';

const updateStarshipsList = list => ({ type: SW_STARSHIPS_UPDATE, payload: list });
export const updateSwStarships = urlToUpdate => (
  (dispatch, getState, api) => {
    handleRequestList(urlToUpdate, api, allRequest => {
      api.swapi.axios.all(allRequest).then(response => {
        dispatch(updateStarshipsList(response));
      });
    });
  }
);

export const SW_SPECIES_UPDATE = 'SW_SPECIES_UPDATE';

const updateSpeciesList = list => ({ type: SW_SPECIES_UPDATE, payload: list });
export const updateSwSpecies = urlToUpdate => (
  (dispatch, getState, api) => {
    handleRequestList(urlToUpdate, api, allRequest => {
      api.swapi.axios.all(allRequest).then(response => {
        dispatch(updateSpeciesList(response));
      });
    });
  }
);

export const SW_PLANETS_UPDATE = 'SW_PLANETS_UPDATE';

const updatePlanetsList = list => ({ type: SW_PLANETS_UPDATE, payload: list });
export const updateSwPlanets = urlToUpdate => (
  (dispatch, getState, api) => {
    handleRequestList(urlToUpdate, api, allRequest => {
      api.swapi.axios.all(allRequest).then(response => {
        dispatch(updatePlanetsList(response));
      });
    });
  }
);
