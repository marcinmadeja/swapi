import React from 'react';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';
import { swapiSpecies } from 'constants/testConstants';
import RendererSpecies from './RendererSpecies';

const loadedData = swapiSpecies;
const urlList = [swapiSpecies[0].url];

const defaultProps = {
  urlList: [],
  loadedData: [],
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const component = <RendererSpecies {...props} />;
  const componentWithRouter = <MemoryRouter><RendererSpecies {...props} /></MemoryRouter>;
  const shallowComponent = shallow(component);

  return {
    component,
    componentWithRouter,
    shallowComponent,
  };
};


describe('RendererSpecies', () => {
  it('should render null when empty urlList or empty loadedData', () => {
    const { shallowComponent: emptyUrlList } = setup({ urlList: [], loadedData: [1] });
    const { shallowComponent: emptyLoadedData } = setup({ urlList: [1], loadedData: [] });

    expect(emptyUrlList.html()).toEqual(null);
    expect(emptyLoadedData.html()).toEqual(null);
  });

  it('should match snapshot', () => {
    const { componentWithRouter } = setup({ urlList, loadedData });
    const tree = renderer
      .create(componentWithRouter)
      .toJSON();

    expect(tree).toMatchSnapshot(tree);
  });
});
