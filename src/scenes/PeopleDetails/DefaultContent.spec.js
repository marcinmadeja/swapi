import React from 'react';
import 'jest-styled-components';
import { swapiPeople } from 'constants/testConstants';
import DefaultContent from './DefaultContent';

describe('DefaultContent', () => {
  it('should render correctly with data', () => {
    const component = <DefaultContent details={swapiPeople[0]} />;
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot(tree);
  });
});
