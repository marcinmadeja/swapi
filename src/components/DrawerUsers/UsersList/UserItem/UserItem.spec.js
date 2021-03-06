import React from 'react';
import { users } from 'constants/testConstants';
import UserItem from './UserItem';

describe('UserItem', () => {
  it('should render', () => {
    const tree = renderer
      .create(<UserItem user={users[0]} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
