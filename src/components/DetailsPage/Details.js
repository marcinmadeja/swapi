import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabsSw from 'components/TabsSw/TabsSw';
import { Main, InfoContainer } from './Details.styles';

class Details extends Component {
  render() {
    const {
      details,
      tabsList,
      detailsHeader: DetailsHeader,
    } = this.props;

    if (!details) return null;

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

Details.propTypes = {
  details: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  tabsList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]).isRequired,
  detailsHeader: PropTypes.func.isRequired,
};

Details.defaultProps = {
  details: false,
};

export default Details;
