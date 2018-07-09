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
  const pageDetails = getItemByIdLocal(id, list);
  return !pageDetails && !pendingDetails && !errorsDetails;
};

export const getItemByIdLocal = (id, list) => {
  return list.find(item => swapiService.getIdFromLink(item.url) === id);
};

export const getId = props => {
  return parseInt(get(props, 'match.params.id', null), 10);
};

export const formatTabList = (itemDetails, tabsList) => {
  if (!itemDetails) return false;
  return tabsList.map(tab => formatTab(tab, itemDetails));
};

export const formatTab = (tab, itemDetails) => {
  const formatedTab = { ...tab };
  const { content, list, listName } = formatedTab;
  const Content = content;

  if (content) formatedTab.content = <Content details={itemDetails} />;
  if (list && listName) formatedTab.list = itemDetails[listName] || [];
  return formatedTab;
};

class DetailsPage extends Component {
  componentDidMount() {
    sendRequestIfNeeded(this.props);
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
    const { list, detailsHeader, tabsList } = this.props;
    const id = getId(this.props);
    const itemDetails = getItemByIdLocal(id, list);
    const formatedTabsList = formatTabList(itemDetails, tabsList);

    return (
      <Main>
        {this.shouldRenderPending() && this.renderPending()}
        {this.shouldRenderErrors() && this.renderErrors()}
        <Details
          details={itemDetails}
          tabsList={formatedTabsList}
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
