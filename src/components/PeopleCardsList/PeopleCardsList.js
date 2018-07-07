import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import PeopleCard from './PeopleCard/PeopleCard';

class PeopleCardsList extends Component {
  render() {
    const { users } = this.props;
    return (
      <Fragment>
        {users.map(user => <PeopleCard key={user.url} user={user} />)}
      </Fragment>
    );
  }
}

PeopleCardsList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default PeopleCardsList;
