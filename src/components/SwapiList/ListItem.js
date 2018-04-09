import React from 'react';
import { Link } from 'react-router-dom';
import { swapiService } from 'services';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LinkIcon from 'material-ui-icons/Link';
import {
  styles,
  Name,
  InfoItem,
} from './ListItem.styles';

const Starship = ({
  classes = {},
  item: {
    name,
    model,
    manufacturer,
    url,
  },
}) => {
  const seoName = swapiService.formatUrlName(name);
  const filmId = swapiService.getIdFromLink(url);
  const itemUrl = `/starships/${seoName}/${filmId}`;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Name>
          {name}
        </Name>

        <InfoItem>
          <strong>model:</strong>
          {model}
        </InfoItem>

        <InfoItem>
          <strong>manufacturer:</strong>
          {manufacturer}
        </InfoItem>

        <CardActions className={classes.cardActions}>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton component={props => <Link to={itemUrl} {...props} />} aria-label="Link">
            <LinkIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Starship);
