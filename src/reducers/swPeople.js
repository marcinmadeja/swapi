import { SW_PEOPLE_REQUEST, SW_PEOPLE_SUCCESS, SW_PEOPLE_FAILURE } from 'actions/swPeople';

import { SW_PEOPLE_UPDATE } from 'actions/swUpdate';
import { swapiService } from 'services';

function updateList(payload, state) {
  const list = swapiService
    .removeDuplicate([...state.list, ...payload]);

  return {
    ...state,
    list,
  };
}

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

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_PEOPLE_REQUEST:
      return { ...state, pending: true, errors: false };
    case SW_PEOPLE_SUCCESS:
      return updateInfoAndList(action.payload);
    case SW_PEOPLE_FAILURE:
      return { ...state, pending: false, errors: true };
    case SW_PEOPLE_UPDATE:
      return updateList(action.payload, state);
    default:
      return state;
  }
};
