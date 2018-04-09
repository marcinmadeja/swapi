import React, { Component } from 'react';

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
    } = this.props;

    if (pending) return <AlertStandard msg="Loading data" progressBar />;
    if (errors) return <AlertWarning msg="There was an error" />;
    if (!list.length) return null;

    return list.map(item => <ListItem key={item.url} item={item} />);
  }
}

export default SwapiList;
