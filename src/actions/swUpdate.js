export const SW_FILMS_UPDATE = 'SW_FILMS_UPDATE';

const updateFilmsList = list => ({ type: SW_FILMS_UPDATE, payload: list });
export const updateSwFilms = urlToUpdate => (
  (dispatch, getState, api) => {
    api.swapi.getDataListByUrl(urlToUpdate)
      .then(response => {
        dispatch(updateFilmsList(response));
      });
  }
);

export const SW_VEHICLES_UPDATE = 'SW_VEHICLES_UPDATE';

const updateVehiclesList = list => ({ type: SW_VEHICLES_UPDATE, payload: list });
export const updateSwVehicles = urlToUpdate => (
  (dispatch, getState, api) => {
    api.swapi.getDataListByUrl(urlToUpdate)
      .then(response => {
        dispatch(updateVehiclesList(response));
      });
  }
);

export const SW_STARSHIPS_UPDATE = 'SW_STARSHIPS_UPDATE';

const updateStarshipsList = list => ({ type: SW_STARSHIPS_UPDATE, payload: list });
export const updateSwStarships = urlToUpdate => (
  (dispatch, getState, api) => {
    api.swapi.getDataListByUrl(urlToUpdate)
      .then(response => {
        dispatch(updateStarshipsList(response));
      });
  }
);
