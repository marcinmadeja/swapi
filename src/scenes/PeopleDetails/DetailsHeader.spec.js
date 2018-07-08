import React from 'react';
import 'jest-styled-components';
import { swapiPeople } from 'constants/testConstants';
import DetailsHeader from './DetailsHeader';

describe('DetailsHeader', () => {
  it('should render correctly with data', () => {
    const component = <DetailsHeader details={swapiPeople[0]} />;
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot(tree);
  });
});
