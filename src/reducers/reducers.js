import { combineReducers } from 'redux';
import user from './user';
import usersList from './usersList';
import swPeople from './swPeople';
import swFilms from './swFilms';
import swStarships from './swStarships';
import swSpecies from './swSpecies';
import swVehicles from './swVehicles';
import swPlanets from './swPlanets';
import drawers from './drawers';

export default combineReducers({
  user,
  usersList,
  drawers,
  swPeople,
  swFilms,
  swStarships,
  swSpecies,
  swVehicles,
  swPlanets,
});
