import {
  SW_VEHICLES_REQUEST, SW_VEHICLES_SUCCESS, SW_VEHICLES_FAILURE,
  SW_VEHICLES_SINGLE_REQUEST, SW_VEHICLES_SINGLE_SUCCESS, SW_VEHICLES_SINGLE_FAILURE,
} from 'actions/swVehicles';
import { SW_VEHICLES_UPDATE } from 'actions/swUpdate';
import { reduxUtils } from 'services';

const initialState = {
  requestData: null,
  list: [],
  pending: false,
  errors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_VEHICLES_REQUEST:
      return { ...state, pending: true, errors: false };
    case SW_VEHICLES_SUCCESS:
      return reduxUtils.updateInfoAndList(action.payload, state);
    case SW_VEHICLES_FAILURE:
      return { ...state, pending: false, errors: true };

    case SW_VEHICLES_SINGLE_REQUEST:
      return { ...state, pendingDetails: true, errorsDetails: false };
    case SW_VEHICLES_SINGLE_FAILURE:
      return { ...state, pendingDetails: false, errorsDetails: true };
    case SW_VEHICLES_SINGLE_SUCCESS:
      return reduxUtils.updateListByDetails(action.payload, state);

    case SW_VEHICLES_UPDATE:
      return reduxUtils.updateList(action.payload, state);
    default:
      return state;
  }
};
