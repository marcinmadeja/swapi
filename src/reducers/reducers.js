import { combineReducers } from 'redux';
import user from './user';
import usersList from './usersList';
import swPeople from './swPeople';
import swFilms from './swFilms';
import swStarships from './swStarships';
import swVehicles from './swVehicles';
import drawers from './drawers';

export default combineReducers({
  user,
  usersList,
  drawers,
  swPeople,
  swFilms,
  swStarships,
  swVehicles,
});
