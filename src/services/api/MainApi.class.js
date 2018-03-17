import axios from 'axios';

export default class MainApi {
  constructor() {
    this.axios = axios;
  }

  emptyFunction(data) {
    return data;
  }

  getCancelSource() {
    const CancelToken = this.axios.CancelToken;
    const source = CancelToken.source();
    return source;
  }

  handleErrors(response) {
    if (!response.ok) {
      const error = this.createError(response);
      throw error;
    }
    return response;
  }

  returnData(response) {
    const { data } = response;

    if (response.status === 200) {
      return data;
    } else if (response.status === 204) {
      return [];
    }

    return Promise.reject(response.text());
  }

  handleResponseError(error, cbError = this.emptyFunction) {
    console.log(error);
    cbError(error);
  }

  handleResponseErrorAxios(error, cbError = this.emptyFunction) {
    console.log('error', error);

    if (this.axios.isCancel(error)) {
      console.log('Request canceled', error.message);
      return false;
    }

    cbError(error);
  }
}
