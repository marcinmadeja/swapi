import React from 'react';
import 'jest-styled-components';
import { swapiPeople } from 'constants/testConstants';
import TabContent, {
  areNotArrays,
  isUpdatingInProgress,
  isNoData,
} from './TabContent';

const EmptyComponent = () => <div data-test="content" />;

const defaultProps = {
  isActive: false,
  urlList: false,
  loadedData: [],
  content: <EmptyComponent />,
  updateData: jest.fn,
  Render: content => content,
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const component = <TabContent {...props} />;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};


describe('TabContent', () => {
  describe('Component state', () => {
    it('should render loading data alert', () => {
      const { shallowComponent } = setup({ urlList: [swapiPeople[0].url], isActive: true });
      expect(shallowComponent.find('[data-test="loading-data"]').length).toEqual(1);
    });

    it('should render no data alert', () => {
      const { shallowComponent } = setup({ urlList: [] });
      expect(shallowComponent.find('[data-test="no-data"]').length).toEqual(1);
    });
  });

  describe('areNotArrays', () => {
    it('should return true one at least param is not array', () => {
      expect(areNotArrays(
        false,
        [],
      )).toEqual(true);

      expect(areNotArrays(
        [],
        false,
      )).toEqual(true);
    });
  });

  describe('isUpdatingInProgress', () => {
    it('should render true when update in progress', () => {
      expect(isUpdatingInProgress(
        Array(1),
        true,
      )).toEqual(true);
    });

    it('should render false when update not in progress', () => {
      expect(isUpdatingInProgress(
        Array(0),
        true,
      )).toEqual(false);

      expect(isUpdatingInProgress(
        Array(1),
        false,
      )).toEqual(false);
    });
  });

  describe('isNoData', () => {
    it('should render true when no data', () => {
      expect(isNoData([])).toEqual(true);
    });

    it('should render false when data', () => {
      expect(isNoData(Array(4))).toEqual(false);
    });
  });
});
