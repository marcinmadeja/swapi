import {
  SW_PEOPLE_REQUEST, SW_PEOPLE_SUCCESS, SW_PEOPLE_FAILURE,
  SW_PEOPLE_SINGLE_REQUEST, SW_PEOPLE_SINGLE_SUCCESS, SW_PEOPLE_SINGLE_FAILURE,
} from 'actions/swPeople';
import { SW_PEOPLE_UPDATE } from 'actions/swUpdate';
import { reduxUtils } from 'services';

const initialState = {
  requestData: null,
  list: [],
  pending: false,
  errors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_PEOPLE_REQUEST:
      return { ...state, pending: true, errors: false };
    case SW_PEOPLE_SUCCESS:
      return reduxUtils.updateInfoAndList(action.payload, state);
    case SW_PEOPLE_FAILURE:
      return { ...state, pending: false, errors: true };

    case SW_PEOPLE_SINGLE_REQUEST:
      return { ...state, pendingDetails: true, errorsDetails: false };
    case SW_PEOPLE_SINGLE_FAILURE:
      return { ...state, pendingDetails: false, errorsDetails: true };
    case SW_PEOPLE_SINGLE_SUCCESS:
      return reduxUtils.updateListByDetails(action.payload, state);

    case SW_PEOPLE_UPDATE:
      return reduxUtils.updateList(action.payload, state);
    default:
      return state;
  }
};
