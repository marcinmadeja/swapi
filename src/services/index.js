import api from './api';
import User from './user/User.class';
import SwapiService from './swapi/SwapiService.class';
import ReduxUtils from './redux/ReduxUtils.class';

export const userService = new User();
export const swapiService = new SwapiService();
export const reduxUtils = new ReduxUtils();

export { api };
