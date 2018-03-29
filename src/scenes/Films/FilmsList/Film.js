import React from 'react';
import { Link } from 'react-router-dom';
import { swapiService } from 'services';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LinkIcon from 'material-ui-icons/Link';
import FilmsImage from 'images/films';
import {
  styles,
  Title,
  Director,
  Description,
} from './Film.styles';

const Film = ({
  classes,
  film: {
    director,
    episode_id,
    title,
    opening_crawl,
    url,
  },
}) => {
  const seoName = swapiService.formatUrlName(title);
  const filmId = swapiService.getIdFromLink(url);
  const filmUrl = `/films/${seoName}/${filmId}`;

  return (
    <Card className={classes.card}>
      <CardMedia image={FilmsImage[`film${episode_id}`]} title={title} />

      <CardContent className={classes.cardContent}>
        <Title>{title}</Title>
        <Director>{director}</Director>
        <Description>{opening_crawl}</Description>

        <CardActions className={classes.cardActions}>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton component={props => <Link to={filmUrl} {...props} />} aria-label="Link">
            <LinkIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Film);
