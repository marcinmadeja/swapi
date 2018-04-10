import { swapiService } from 'services';

export default class ReduxUtils {
  updateList(payload, state) {
    const list = swapiService
      .removeDuplicate([...state.list, ...payload]);

    return {
      ...state,
      list,
    };
  }

  updateInfoAndList(payload, state, sort) {
    let list = payload.results;
    if (sort) list = list.sort(sort);
    delete payload.results;

    return {
      ...state,
      list,
      requestData: payload,
      pending: false,
      errors: false,
    };
  }

  updateListByDetails(payload, state) {
    const newState = this.updateList(payload, state);

    return {
      ...newState,
      pendingDetails: false,
      errorsDetails: false,
    };
  }
}
