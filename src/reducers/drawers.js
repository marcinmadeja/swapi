import { DRAWER_MENU_TOGGLE, DRAWER_USERS_TOGGLE } from 'actions/drawers';

const initialState = {
  extendDrawerMenu: false,
  extendDrawerUsers: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_MENU_TOGGLE:
      return { ...state, extendDrawerMenu: !state.extendDrawerMenu };
    case DRAWER_USERS_TOGGLE:
      return { ...state, extendDrawerUsers: !state.extendDrawerUsers };
    default:
      return state;
  }
};
