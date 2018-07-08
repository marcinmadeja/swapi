import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { swapiService } from 'services';
import { AlertWarning, AlertStandard } from 'components/alerts';
import Details from './Details';

import {
  Main,
} from './DetailsPage.styles';

export const sendRequestIfNeeded = props => {
  const { getItemById } = props;
  const id = getId(props);
  if (shouldSendRequest(props)) getItemById(id);
};

export const shouldSendRequest = props => {
  const { pendingDetails, errorsDetails, list } = props;
  const id = getId(props);
  const filmDetails = getItemByIdLocal(id, list);

  return !filmDetails && !pendingDetails && !errorsDetails;
};

export const getItemByIdLocal = (id, list) => {
  return list.find(film => swapiService.getIdFromLink(film.url) === id);
};

export const getId = props => {
  return parseInt(get(props, 'match.params.id', null), 10);
};

class DetailsPage extends Component {
  componentDidMount() {
    sendRequestIfNeeded(this.props);
  }

  formatTabList(itemDetails) {
    if (!itemDetails) return false;
    const tabsList = this.props.tabsList || [];
    return tabsList.map(tab => this.formatTab(tab, itemDetails));
  }

  formatTab(tab, itemDetails) {
    const formatedTab = { ...tab };
    const { content, list, listName } = formatedTab;
    const Content = content;

    if (content) formatedTab.content = <Content details={itemDetails} />;
    if (list && listName) formatedTab.list = itemDetails[listName] || [];
    return formatedTab;
  }

  shouldRenderPending() {
    return this.props.pendingDetails;
  }

  renderPending() {
    return <AlertStandard msg="Loading data" progressBar data-test="pendingAlert" />;
  }

  shouldRenderErrors() {
    return this.props.errorsDetails;
  }

  renderErrors() {
    return <AlertWarning msg="There was an error" data-test="errorAlert" />;
  }

  render() {
    const { list, detailsHeader } = this.props;
    const id = getId(this.props);
    const itemDetails = getItemByIdLocal(id, list);
    const tabsList = this.formatTabList(itemDetails);

    return (
      <Main>
        {this.shouldRenderPending() && this.renderPending()}
        {this.shouldRenderErrors() && this.renderErrors()}
        <Details
          details={itemDetails}
          tabsList={tabsList}
          detailsHeader={detailsHeader}
        />
      </Main>
    );
  }
}

DetailsPage.propTypes = {
  pendingDetails: PropTypes.bool.isRequired,
  errorsDetails: PropTypes.bool.isRequired,
  getItemById: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  detailsHeader: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  tabsList: PropTypes.array.isRequired,
};

export default DetailsPage;
