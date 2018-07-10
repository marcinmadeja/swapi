import React from 'react';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';
import { swapiFilms } from 'constants/testConstants';
import RendererFilms from './RendererFilms';

const loadedData = swapiFilms;
const urlList = [swapiFilms[0].url];

const defaultProps = {
  urlList: [],
  loadedData: [],
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const component = <RendererFilms {...props} />;
  const componentWithRouter = <MemoryRouter><RendererFilms {...props} /></MemoryRouter>;
  const shallowComponent = shallow(component);

  return {
    component,
    componentWithRouter,
    shallowComponent,
  };
};


describe('AppDrawer', () => {
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
