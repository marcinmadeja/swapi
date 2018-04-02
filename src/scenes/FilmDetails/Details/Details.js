import React, { Component, Fragment } from 'react';
import TabsSw from 'components/TabsSw/TabsSw';
import Photo from './Photo';
import Info from './Info';

class Details extends Component {
  render() {
    const details = this.props.details;
    if (!details) return false;

    const tabsList = [
      {
        name: 'Crawl',
        content: 'lorem ipsum',
      },
      {
        name: 'characters',
        type: 'people',
        list: details.characters,
      },
      {
        name: 'planets',
        type: 'planets',
        list: details.planets,
      },
      {
        name: 'species',
        type: 'species',
        list: details.species,
      },
      {
        name: 'starships',
        type: 'starships',
        list: details.starships,
      },
      {
        name: 'vehicles',
        type: 'vehicles',
        list: details.vehicles,
      },
    ];

    return (
      <Fragment>
        <Photo episodeId={details.episode_id} />

        <Info
          title={details.title}
          producer={details.producer}
          releaseDate={details.release_date}
          director={details.director}
          openingCrawl={details.opening_crawl}
        />

        <TabsSw
          tabsList={tabsList}
          details={details}
        />
      </Fragment>
    );
  }
}

export default Details;
