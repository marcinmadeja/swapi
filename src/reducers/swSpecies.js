import { SW_SPECIES_UPDATE } from 'actions/swUpdate';
import { SW_SPECIES_REQUEST, SW_SPECIES_SUCCESS, SW_SPECIES_FAILURE } from 'actions/swSpecies';
import { swapiService } from 'services';

const initialState = {
  requestData: null,
  list: [],
  pending: false,
  errors: false,
};

function updateInfoAndList(payload) {
  const list = payload.results;
  delete payload.results;

  return {
    list,
    requestData: payload,
    pending: false,
    errors: false,
  };
}

function updateList(payload, state) {
  const list = swapiService.removeDuplicate([...state.list, ...payload]);

  return {
    ...state,
    list,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_SPECIES_REQUEST:
      return { ...state, pending: true, errors: false };
    case SW_SPECIES_SUCCESS:
      return updateInfoAndList(action.payload);
    case SW_SPECIES_FAILURE:
      return { ...state, pending: false, errors: true };
    case SW_SPECIES_UPDATE:
      return updateList(action.payload, state);
    default:
      return state;
  }
};
