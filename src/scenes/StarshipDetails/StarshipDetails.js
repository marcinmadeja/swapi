import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStarshipById } from 'actions/swStarships';
import { get } from 'lodash';
import { swapiService } from 'services';

import { AlertWarning, AlertStandard } from 'components/alerts';
import Details from './Details/Details';

import {
  Main,
} from './StarshipDetails.styles';

class StarshipDetails extends Component {
  componentDidMount() {
    this.sendRequestIfNeeded();
  }

  sendRequestIfNeeded() {
    const { pendingDetails, errorsDetails, list } = this.props;
    const id = this.getId();
    const starshipDetails = this.getLoadedStarship(id);
    if (!starshipDetails && !pendingDetails && !errorsDetails) this.props.getStarshipById(id);
  }

  getLoadedStarship(id) {
    const { list } = this.props;
    return list.find(starship => swapiService.getIdFromLink(starship.url) === id);
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
    const starshipDetails = this.getLoadedStarship(id);

    return (
      <Main>
        {this.shouldRenderPending() && this.renderPending()}
        {this.shouldRenderErrors() && this.renderErrors()}
        <Details details={starshipDetails} />
      </Main>
    );
  }
}

const mapStateToProps = state => {
  const { pendingDetails, errorsDetails, list } = state.swStarships;
  return { pendingDetails, errorsDetails, list };
};

export default connect(mapStateToProps, { getStarshipById })(StarshipDetails);
