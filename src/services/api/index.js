import UserApi from './users/UsersApi';
import SwapiApi from './swapi/SwapiApi';

const user = new UserApi();
const swapi = new SwapiApi();

const api = {
  user,
  swapi,
};

export default api;
