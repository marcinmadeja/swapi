import React, { Component, Fragment } from 'react';
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

export default PeopleCardsList;
