import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSwFilms } from 'actions/swFilms';

import { AlertWarning, AlertStandard } from 'components/alerts';
import FilmsList from './FilmsList/FilmsList';

class Films extends Component {
  componentDidMount() {
    this.props.requestSwFilms();
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

    return <FilmsList list={list} />;
  }
}

const mapStateToProps = state => {
  const { list, pending, errors } = state.swFilms;
  return { list, pending, errors };
};

export default connect(mapStateToProps, { requestSwFilms })(Films);
