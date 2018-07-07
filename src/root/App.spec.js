import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import App from './App';

const PATHS = {
  FilmDetails: '/films/:name/:id',
  Films: '/films',

  PeopleDetails: '/species/:name/:id',
  People: '/species',

  SpeciesDetails: '/species/:name/:id',
  Species: '/species',

  PlanetsDetails: '/planets/:name/:id',
  Planets: '/planets',

  VehiclesDetails: '/vehicles/:name/:id',
  Vehicles: '/vehicles',

  StarshipDetails: '/starships/:name/:id',
  Starships: '/starships',
};

const renderComponentByRoute = (url, path) => {
  return mount(
    <MemoryRouter initialEntries={[url]}>
      <Route
        path={path}
        render={() => <div>render correctly</div>}
      />
    </MemoryRouter>).find('div');
};


describe('App', () => {
  it('should render', () => {
    const shallowComponent = shallow(<App />);
    expect(shallowComponent.exists()).toEqual(true);
  });

  it('should render component for FilmDetails', () => {
    const routeComponent = renderComponentByRoute('/films/name/id', PATHS.FilmDetails);
    expect(routeComponent.exists()).toEqual(true);
  });

  it('should render component for Films', () => {
    const routeComponent = renderComponentByRoute('/films', PATHS.Films);
    expect(routeComponent.exists()).toEqual(true);
  });

  it('should render component for SpeciesDetails', () => {
    const routeComponent = renderComponentByRoute('/species/name/id', PATHS.SpeciesDetails);
    expect(routeComponent.exists()).toEqual(true);
  });

  it('should render component for Species', () => {
    const routeComponent = renderComponentByRoute('/species', PATHS.Species);
    expect(routeComponent.exists()).toEqual(true);
  });

  it('should render component for PlanetsDetails', () => {
    const routeComponent = renderComponentByRoute('/planets/:name/:id', PATHS.PlanetsDetails);
    expect(routeComponent.exists()).toEqual(true);
  });

  it('should render component for Planets', () => {
    const routeComponent = renderComponentByRoute('/planets', PATHS.Planets);
    expect(routeComponent.exists()).toEqual(true);
  });

  it('should render component for VehiclesDetails', () => {
    const routeComponent = renderComponentByRoute('/vehicles/:name/:id', PATHS.VehiclesDetails);
    expect(routeComponent.exists()).toEqual(true);
  });

  it('should render component for Vehicles', () => {
    const routeComponent = renderComponentByRoute('/vehicles', PATHS.Vehicles);
    expect(routeComponent.exists()).toEqual(true);
  });

  it('should render component for StarshipDetails', () => {
    const routeComponent = renderComponentByRoute('/starships/:name/:id', PATHS.StarshipDetails);
    expect(routeComponent.exists()).toEqual(true);
  });

  it('should render component for Starships', () => {
    const routeComponent = renderComponentByRoute('/starships', PATHS.Starships);
    expect(routeComponent.exists()).toEqual(true);
  });
});
