import { combineReducers } from 'redux';
import user from './user';
import usersList from './usersList';
import swPeople from './swPeople';
import drawers from './drawers';

export default combineReducers({
  user,
  usersList,
  swPeople,
  drawers,
});
