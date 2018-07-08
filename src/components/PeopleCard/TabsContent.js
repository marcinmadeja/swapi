import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import TabContent from './TabContent';
import TabBio from './TabBio';
import TabList from './TabList';

const TabsContent = ({
  currentTab,
  user,
  filmsList,
  updateSwFilms,
  starshipsList,
  updateSwStarships,
  vehiclesList,
  updateSwVehicles,
}) => {
  return (
    <SwipeableViews
      index={currentTab}
      onChangeIndex={this.handleChangeIndex}
    >
      <TabContent forceLoaded render={() => (<TabBio userData={user} />)} />

      <TabContent
        isActive={currentTab === 1}
        urlList={user.films}
        loadedData={filmsList}
        updateData={updateSwFilms}
        render={(urlList, loadedData) => (
          <TabList
            urlList={urlList}
            loadedData={loadedData}
            emptyListMsg="no movies"
            titleKey="title"
          />
        )}
      />

      <TabContent
        isActive={currentTab === 2}
        urlList={user.starships}
        loadedData={starshipsList}
        updateData={updateSwStarships}
        render={(urlList, loadedData) => (
          <TabList
            urlList={urlList}
            loadedData={loadedData}
            emptyListMsg="no starships"
            titleKey="name"
          />
        )}
      />

      <TabContent
        isActive={currentTab === 3}
        urlList={user.vehicles}
        loadedData={vehiclesList}
        updateData={updateSwVehicles}
        render={(urlList, loadedData) => (
          <TabList
            urlList={urlList}
            loadedData={loadedData}
            emptyListMsg="no vehicle"
            titleKey="name"
          />
        )}
      />
    </SwipeableViews>
  );
};

TabsContent.propTypes = {
  user: PropTypes.object.isRequired,
  currentTab: PropTypes.number.isRequired,

  filmsList: PropTypes.array.isRequired,
  starshipsList: PropTypes.array.isRequired,
  vehiclesList: PropTypes.array.isRequired,

  updateSwFilms: PropTypes.func.isRequired,
  updateSwVehicles: PropTypes.func.isRequired,
  updateSwStarships: PropTypes.func.isRequired,
};

export default TabsContent;
