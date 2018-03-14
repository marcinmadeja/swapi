import { combineReducers } from 'redux';
import user from './user';
import drawers from './drawers';

export default combineReducers({ user, drawers });
