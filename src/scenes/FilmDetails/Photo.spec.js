import React from 'react';
import 'jest-styled-components';
import FilmsImage from 'images/films';
import Photo, { Img } from './Photo';

const defaultProps = {
  episodeId: '',
  updateSwVehicles: () => null,
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const component = <Photo {...props} />;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};


describe('Photo', () => {
  it('should match snapshot', () => {
    const { component } = setup({ episodeId: '1' });
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot(tree);
  });

  it('should render null when no episodeId', () => {
    const { shallowComponent } = setup({ episodeId: '' });
    expect(shallowComponent.html()).toEqual(null);
  });
});
