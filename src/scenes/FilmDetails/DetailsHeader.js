import React from 'react';

import { withStyles } from 'material-ui/styles';
import {
  Main,
  Title,
  Text,
} from 'components/DetailsPage/styles';

import Photo from './Photo';

const styles = {
  description: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    background: '#fff',
    padding: '10px 20px',
  },
};

const DetailsHeader = ({ details, classes }) => {
  const { title, producer, director, release_date, episode_id } = details;

  return (
    <Main>
      <Photo episodeId={episode_id} />

      <div className={classes.description}>
        <Title>{title}</Title>

        <Text>
          <p>
            <strong>Producer:</strong>
            {producer}
          </p>

          <p>
            <strong>Director:</strong>
            {director}
          </p>

          <p>
            <strong>Release:</strong>
            {release_date}
          </p>
        </Text>
      </div>
    </Main>
  );
};

export default withStyles(styles)(DetailsHeader);
