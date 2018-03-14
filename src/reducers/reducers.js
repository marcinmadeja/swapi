import { combineReducers } from 'redux';
import user from './user';
import usersList from './usersList';
import drawers from './drawers';

export default combineReducers({
  user,
  usersList,
  drawers,
});
