import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilmById } from 'actions/swFilms';
import { get } from 'lodash';
import { swapiService } from 'services';

import { AlertWarning, AlertStandard } from 'components/alerts';
import Details from './Details/Details';

import {
  Main,
} from './FilmDetails.styles';

class FilmDetails extends Component {
  componentDidMount() {
    this.sendRequestIfNeeded();
  }

  sendRequestIfNeeded() {
    const { pendingDetails, errorsDetails, list } = this.props;
    const id = this.getId();
    const filmDetails = this.getFilmById(id);
    if (!filmDetails && !pendingDetails && !errorsDetails) this.props.getFilmById(id);
  }

  getFilmById(id) {
    const { list } = this.props;
    return list.find(film => swapiService.getIdFromLink(film.url) === id);
  }

  getId() {
    return parseInt(get(this.props, 'match.params.id', null), 10);
  }

  shouldRenderPending() {
    return this.props.pendingDetails;
  }

  renderPending() {
    return <AlertStandard msg="Loading data" progressBar />;
  }

  shouldRenderErrors() {
    return this.props.errorsDetails;
  }

  renderErrors() {
    return <AlertWarning msg="There was an error" />;
  }

  render() {
    const id = this.getId();
    const filmDetails = this.getFilmById(id);

    return (
      <Main>
        {this.shouldRenderPending() && this.renderPending()}
        {this.shouldRenderErrors() && this.renderErrors()}
        <Details details={filmDetails} />
      </Main>
    );
  }
}

const mapStateToProps = state => {
  const { pendingDetails, errorsDetails, list } = state.swFilms;
  return { pendingDetails, errorsDetails, list };
};

export default connect(mapStateToProps, { getFilmById })(FilmDetails);
