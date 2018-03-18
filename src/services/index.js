import api from './api';
import User from './user/User.class';
import SwapiService from './swapi/SwapiService.class';

export const userService = new User();
export const swapiService = new SwapiService();

export { api };
