import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'components/grid';

import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';

import TabsHeader from './TabsHeader';
import CardTitle from './CardTitle';
import TabsContent from './TabsContent';


const styles = (theme) => ({
  card: {
    marginBottom: 30,
    padding: 10,
  },
  tabRoot: {
    minWidth: 'auto',
    flex: 1,
    height: 60,
  },
  tabsRoot: {
    background: 'rgba(0,0,0,0.01)',
    margin: '10px -10px 15px',
    boxShadow: theme.shadows[2],
  },
});

class PeopleCard extends Component {
  constructor(props) {
    super(props);

    this.state = { currentTab: 0 };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event, value) {
    this.setState({ currentTab: value });
  }

  render() {
    const {
      classes,
      user,
    } = this.props;

    const { currentTab } = this.state;

    return (
      <Col md={4}>
        <Card className={classes.card}>
          <CardTitle name={user.name} />

          <TabsHeader
            currentTab={currentTab}
            onTabChange={this.handleTabChange}
            classes={classes}
          />

          <TabsContent
            currentTab={currentTab}
            {...this.props}
          />
        </Card>
      </Col>
    );
  }
}

PeopleCard.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PeopleCard);
