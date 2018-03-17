import styled from 'styled-components';

export const styles = (theme) => ({
  card: {
    marginBottom: 30,
    padding: 10,
  },
  tabRoot: {
    minWidth: 'auto',
    flex: 1,
    height: 60,
  },
  tabsRoot: {
    background: 'rgba(0,0,0,0.01)',
    margin: '10px -10px 15px',
    boxShadow: theme.shadows[2],
  },
});

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitlePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 100%;

  background: rgba(0,0,0,0.04);
  color: rgba(0,0,0,0.3);

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const UserName = styled.h4`
  margin: 15px 0 0;
  font-size: 18px;
  font-weight: 500;
`;
