import { combineReducers } from 'redux';
import user from './user';
import usersList from './usersList';
import swPeople from './swPeople';
import swFilms from './swFilms';
import drawers from './drawers';

export default combineReducers({
  user,
  usersList,
  drawers,
  swPeople,
  swFilms,
});
