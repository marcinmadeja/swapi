import {
  SW_PLANETS_REQUEST, SW_PLANETS_SUCCESS, SW_PLANETS_FAILURE,
  SW_PLANETS_SINGLE_REQUEST, SW_PLANETS_SINGLE_SUCCESS, SW_PLANETS_SINGLE_FAILURE,
} from 'actions/swPlanets';
import { SW_PLANETS_UPDATE } from 'actions/swUpdate';
import { reduxUtils } from 'services';

const initialState = {
  requestData: null,
  list: [],
  pending: false,
  errors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_PLANETS_REQUEST:
      return { ...state, pending: true, errors: false };
    case SW_PLANETS_SUCCESS:
      return reduxUtils.updateInfoAndList(action.payload, state);
    case SW_PLANETS_FAILURE:
      return { ...state, pending: false, errors: true };

    case SW_PLANETS_SINGLE_REQUEST:
      return { ...state, pendingDetails: true, errorsDetails: false };
    case SW_PLANETS_SINGLE_FAILURE:
      return { ...state, pendingDetails: false, errorsDetails: true };
    case SW_PLANETS_SINGLE_SUCCESS:
      return reduxUtils.updateListByDetails(action.payload, state);

    case SW_PLANETS_UPDATE:
      return reduxUtils.updateList(action.payload, state);
    default:
      return state;
  }
};
