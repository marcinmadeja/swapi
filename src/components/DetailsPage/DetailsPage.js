import React, { Component } from 'react';
import { get } from 'lodash';
import { swapiService } from 'services';
import { AlertWarning, AlertStandard } from 'components/alerts';
import Details from './Details';

import {
  Main,
} from './DetailsPage.styles';

class DetailsPage extends Component {
  componentDidMount() {
    this.sendRequestIfNeeded();
  }

  sendRequestIfNeeded() {
    const { pendingDetails, errorsDetails, list, getItemById } = this.props;
    const id = this.getId();
    const filmDetails = this.getItemById(id);
    if (!filmDetails && !pendingDetails && !errorsDetails) getItemById(id);
  }

  getItemById(id) {
    const { list } = this.props;
    return list.find(film => swapiService.getIdFromLink(film.url) === id);
  }

  getId() {
    return parseInt(get(this.props, 'match.params.id', null), 10);
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
    const itemDetails = this.getItemById(id);
    const tabsList = this.formatTabList(itemDetails);

    return (
      <Main>
        {this.shouldRenderPending() && this.renderPending()}
        {this.shouldRenderErrors() && this.renderErrors()}
        <Details
          details={itemDetails}
          tabsList={tabsList}
          detailsHeader={this.props.detailsHeader}
        />
      </Main>
    );
  }
}

export default DetailsPage;
