import React, { Component } from 'react';
import TabsSw from 'components/TabsSw/TabsSw';
import { Main, InfoContainer } from './Details.styles';

class Details extends Component {
  render() {
    const details = this.props.details;
    const tabsList = this.props.tabsList;
    const DetailsHeader = this.props.detailsHeader;
    if (!details) return false;

    return (
      <Main>
        <InfoContainer>
          <DetailsHeader details={details} />
        </InfoContainer>

        <TabsSw
          tabsList={tabsList}
          details={details}
        />
      </Main>
    );
  }
}

export default Details;
