import styled from 'styled-components';

export const styles = {
  card: {
    display: 'flex',
    minHeight: 340,
    marginBottom: 30,

    '& > div': {
      flex: 1,
    },
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

export const Title = styled.h3`
  margin: 0 0 5px;
  font-size: 28px;
  font-weight: 500;
`;

export const Director = styled.h5`
  margin: 0 0 15px;
  color: rgba(0,0,0,.54);
  font-size: 16px;
  font-weight: 500;
`;

export const Description = styled.div`
  line-height: 1.4;
  letter-spacing: 0.6px;
  font-size: 17px;
`;
