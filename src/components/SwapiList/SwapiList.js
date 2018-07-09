import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AlertWarning, AlertStandard } from 'components/alerts';
import ListItem from './ListItem';

class SwapiList extends Component {
  componentDidMount() {
    this.props.requestList();
  }

  render() {
    const {
      list,
      pending,
      errors,
      listName,
      ListDetails,
    } = this.props;

    if (pending) return <AlertStandard msg="Loading data" progressBar data-test="pending" />;
    if (errors) return <AlertWarning msg="There was an error" data-test="errors" />;
    if (!list.length) return null;

    return list.map(item => (
      <ListItem
        key={item.url}
        item={item}
        listName={listName}
        ListDetails={ListDetails}
      />
    ));
  }
}

SwapiList.propTypes = {
  list: PropTypes.array.isRequired,
  pending: PropTypes.bool.isRequired,
  errors: PropTypes.bool.isRequired,
  listName: PropTypes.string.isRequired,
  ListDetails: PropTypes.func.isRequired,
  requestList: PropTypes.func.isRequired,
};

export default SwapiList;
