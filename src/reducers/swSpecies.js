import { SW_SPECIES_UPDATE } from 'actions/swUpdate';
import { swapiService } from 'services';

const initialState = {
  requestData: null,
  list: [],
  pending: false,
  errors: false,
};

function updateList(payload, state) {
  const list = swapiService.removeDuplicate([...state.list, ...payload]);

  return {
    ...state,
    list,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_SPECIES_UPDATE:
      return updateList(action.payload, state);
    default:
      return state;
  }
};
