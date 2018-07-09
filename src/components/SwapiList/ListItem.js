import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { swapiService } from 'services';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LinkIcon from 'material-ui-icons/Link';
import {
  styles,
} from './ListItem.styles';

export const createSeName = (name, url, listName) => {
  const seoName = swapiService.formatUrlName(name);
  const filmId = swapiService.getIdFromLink(url);
  return `/${listName}/${seoName}/${filmId}`;
};

const ListItem = ({
  classes = {},
  ListDetails,
  listName,
  item,
  item: {
    name,
    url,
  },
}) => {
  const itemURL = createSeName(name, url, listName);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <ListDetails details={item} />

        <CardActions className={classes.cardActions}>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton component={props => <Link to={itemURL} {...props} />} aria-label="Link">
            <LinkIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  ListDetails: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(ListItem);
