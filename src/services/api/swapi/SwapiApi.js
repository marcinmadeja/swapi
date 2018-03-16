import MainApi from '../MainApi.class';

export default class SwapiApi extends MainApi {
  constructor() {
    super();
    this.APP_URL = process.env.REACT_APP_SWAPI_API_URL;
  }

  getPeople() {
    const source = this.getCancelSource();

    const apiResponse = this.axios
      .get(`${this.APP_URL}people/?format=json`, {
        cancelToken: source.token,
      })
      .then(this.returnData);

    return apiResponse;
  }
}
