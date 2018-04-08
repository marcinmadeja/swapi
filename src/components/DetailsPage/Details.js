import React, { Component } from 'react';
import TabsSw from 'components/TabsSw/TabsSw';
import { Main, InfoContainer } from './Details.styles';

const DefaultContent = ({
  details: {
    cost_in_credits,
    length,
    crew,
    passengers,
    starship_class,
  },
}) => {
  return (
    <div>
      starship class: <strong>{starship_class}</strong><br />
      crew: <strong>{crew}</strong><br />
      passengers: <strong>{passengers}</strong><br />
      cost in credits: <strong>{cost_in_credits}</strong><br />
      length: <strong>{length}</strong><br />
    </div>
  );
};

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
