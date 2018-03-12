import MainApi from '../MainApi.class';

export default class UserApi extends MainApi {
  constructor() {
    super();
    this.APP_URL = process.env.REACT_APP_USERS_API_URL;
  }

  returnUserList(data) {
    return data.results || [];
  }

  returnSingleUser(data) {
    return data[0] || null;
  }

  signInUser() {
    const source = this.getCancelSource();

    const apiResponse = this.axios
      .get(`${this.APP_URL}?results=1`, {
        cancelToken: source.token,
      })
      .then(this.returnData)
      .then(this.returnUserList)
      .then(this.returnSingleUser);

    return apiResponse;
  }
}
