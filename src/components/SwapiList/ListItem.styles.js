import styled from 'styled-components';

export const styles = {
  card: {
    width: 'calc(33.333333% - 30px)',
    margin: '0 15px 30px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '0!important',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0,
    marginTop: 'auto',
  },
};

export const Name = styled.h3`
  margin: 0 0 21px;
  font-size: 20px;
  font-weight: 700;
`;

export const InfoItem = styled.div`
  margin-bottom: 20px;
  letter-spacing: 0.7px;

  strong {
    margin-bottom: 5px;
    display: block;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: initial;
  }
`;
