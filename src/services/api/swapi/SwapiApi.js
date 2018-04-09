import MainApi from '../MainApi.class';

export default class SwapiApi extends MainApi {
  constructor() {
    super();
    this.APP_URL = process.env.REACT_APP_SWAPI_API_URL;
    this.PEOPLE_URL = `${this.APP_URL}people/`;
    this.FILMS_URL = `${this.APP_URL}films/`;
    this.STARSHIPS_URL = `${this.APP_URL}starships/`;
    this.VEHICLES_URL = `${this.APP_URL}vehicles/`;
    this.SPECIES_URL = `${this.APP_URL}species/`;
    this.PLANETS_URL = `${this.APP_URL}planets/`;
  }

  getUrlById(id, type) {
    switch (type) {
      case 'people': return `${this.PEOPLE_URL}${id}/`;
      case 'films': return `${this.FILMS_URL}${id}/`;
      case 'starships': return `${this.STARSHIPS_URL}${id}/`;
      case 'vehicles': return `${this.VEHICLES_URL}${id}/`;
      case 'species': return `${this.SPECIES_URL}${id}/`;
      case 'planets': return `${this.PLANETS_URL}${id}/`;
      default:
        throw new Error('Wrong type. No endpoint for this link');
    }
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

  getVehicles() {
    const source = this.getCancelSource();

    const apiResponse = this.axios
      .get(`${this.APP_URL}vehicles/?format=json`, {
        cancelToken: source.token,
      })
      .then(this.returnData);

    return apiResponse;
  }

  getFilms() {
    const source = this.getCancelSource();

    const apiResponse = this.axios
      .get(`${this.APP_URL}films/?format=json`, {
        cancelToken: source.token,
      })
      .then(this.returnData);

    return apiResponse;
  }

  getStarships() {
    const source = this.getCancelSource();

    const apiResponse = this.axios
      .get(`${this.APP_URL}starships/?format=json`, {
        cancelToken: source.token,
      })
      .then(this.returnData);

    return apiResponse;
  }

  getSpecies() {
    const source = this.getCancelSource();

    const apiResponse = this.axios
      .get(`${this.APP_URL}species/?format=json`, {
        cancelToken: source.token,
      })
      .then(this.returnData);

    return apiResponse;
  }

  getDataListByUrl(list) {
    return this.axios.all(list.map(url => this.getDataByUrl(url)));
  }

  getDataByUrl(url) {
    const source = this.getCancelSource();

    const apiResponse = this.axios
      .get(`${url}?format=json`, {
        cancelToken: source.token,
      })
      .then(this.returnData);

    return apiResponse;
  }
}
