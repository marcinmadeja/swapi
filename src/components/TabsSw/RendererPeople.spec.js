import React from 'react';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';
import { swapiPeople } from 'constants/testConstants';
import RendererPeople from './RendererPeople';

const loadedData = swapiPeople;
const urlList = [swapiPeople[0].url];

const defaultProps = {
  urlList: [],
  loadedData: [],
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const component = <RendererPeople {...props} />;
  const componentWithRouter = <MemoryRouter><RendererPeople {...props} /></MemoryRouter>;
  const shallowComponent = shallow(component);

  return {
    component,
    componentWithRouter,
    shallowComponent,
  };
};


describe('RendererPeople', () => {
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
