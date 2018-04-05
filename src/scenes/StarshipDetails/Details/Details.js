import React, { Component } from 'react';
import TabsSw from 'components/TabsSw/TabsSw';
import Info from './Info';
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
    if (!details) return false;

    const tabsList = [
      {
        name: 'Crawl',
        content: <DefaultContent details={details} />,
      },
      {
        name: 'pilots',
        type: 'people',
        list: details.pilots,
      },
      {
        name: 'films',
        type: 'films',
        list: details.films,
      },
    ];

    return (
      <Main>
        <InfoContainer>
          <Info
            name={details.name}
            model={details.model}
            manufacturer={details.manufacturer}
          />
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
