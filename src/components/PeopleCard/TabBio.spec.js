import React from 'react';
import 'jest-styled-components';
import TabBio from './TabBio';

const userData = {
  birth_year: '1999',
  eye_color: 'red',
  hair_color: 'red',
  height: '180',
  mass: '90',
  skin_color: 'red',
};

describe('TabBio', () => {
  it('should match snapshot', () => {
    const component = <TabBio userData={userData} />;
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot(tree);
  });
});
