import {
  SW_STARSHIPS_REQUEST, SW_STARSHIPS_SUCCESS, SW_STARSHIPS_FAILURE,
  SW_STARSHIPS_SINGLE_REQUEST, SW_STARSHIPS_SINGLE_SUCCESS, SW_STARSHIPS_SINGLE_FAILURE,
} from 'actions/swStarships';
import { SW_STARSHIPS_UPDATE } from 'actions/swUpdate';
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

function updateListByDetails(payload, state) {
  const newState = updateList(payload, state);

  return {
    ...newState,
    pendingDetails: false,
    errorsDetails: false,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_STARSHIPS_REQUEST:
      return { ...state, pending: true, errors: false };
    case SW_STARSHIPS_SUCCESS:
      return updateInfoAndList(action.payload);
    case SW_STARSHIPS_FAILURE:
      return { ...state, pending: false, errors: true };

    case SW_STARSHIPS_SINGLE_REQUEST:
      return { ...state, pendingDetails: true, errorsDetails: false };
    case SW_STARSHIPS_SINGLE_FAILURE:
      return { ...state, pendingDetails: false, errorsDetails: true };
    case SW_STARSHIPS_SINGLE_SUCCESS:
      return updateListByDetails(action.payload, state);

    case SW_STARSHIPS_UPDATE:
      return updateList(action.payload, state);
    default:
      return state;
  }
};
