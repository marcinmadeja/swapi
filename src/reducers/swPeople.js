import { SW_PEOPLE_REQUEST, SW_PEOPLE_SUCCESS, SW_PEOPLE_FAILURE } from 'actions/swPeople';

const initialState = {
  peopleData: null,
  pending: false,
  errors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SW_PEOPLE_REQUEST:
      return { peopleData: null, pending: true, errors: false };
    case SW_PEOPLE_SUCCESS:
      return { peopleData: action.payload, pending: false, errors: false };
    case SW_PEOPLE_FAILURE:
      return { peopleData: null, pending: false, errors: true };
    default:
      return state;
  }
};
