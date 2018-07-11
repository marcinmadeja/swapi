import * as actions from './drawers';

describe('Drawers action', () => {
  it('should create DRAWER_MENU_TOGGLE action', () => {
    expect(actions.toggleMenu()).toEqual({ type: actions.DRAWER_MENU_TOGGLE });
  });

  it('should create DRAWER_USERS_TOGGLE action', () => {
    expect(actions.toggleUsers()).toEqual({ type: actions.DRAWER_USERS_TOGGLE });
  });
});
