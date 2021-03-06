import {
  SW_SPECIES_REQUEST, SW_SPECIES_SUCCESS, SW_SPECIES_FAILURE,
  SW_SPECIES_SINGLE_REQUEST, SW_SPECIES_SINGLE_SUCCESS, SW_SPECIES_SINGLE_FAILURE,
} from 'actions/swSpecies';
import { SW_SPECIES_UPDATE } from 'actions/swUpdate';
import { reduxUtils } from 'services';

const initialState = {
  requestData: null,
  list: [],
  pending: false,
  errors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_SPECIES_REQUEST:
      return { ...state, pending: true, errors: false };
    case SW_SPECIES_SUCCESS:
      return reduxUtils.updateInfoAndList(action.payload, state);
    case SW_SPECIES_FAILURE:
      return { ...state, pending: false, errors: true };

    case SW_SPECIES_SINGLE_REQUEST:
      return { ...state, pendingDetails: true, errorsDetails: false };
    case SW_SPECIES_SINGLE_FAILURE:
      return { ...state, pendingDetails: false, errorsDetails: true };
    case SW_SPECIES_SINGLE_SUCCESS:
      return reduxUtils.updateListByDetails(action.payload, state);

    case SW_SPECIES_UPDATE:
      return reduxUtils.updateList(action.payload, state);
    default:
      return state;
  }
};
