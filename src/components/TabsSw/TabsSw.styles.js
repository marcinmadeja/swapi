import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mainTheme from 'constants/theme';

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

export const Main = styled.div`
  margin-bottom: 20px;
`;

export const TabWrapper = styled.div`
  height: 400px;
  overflow: auto;
`;

export const DefaultTab = styled.div`
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.7px;
`;

export const ListItem = styled(Link)`
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: inherit;
  text-decoration: none;
  display: block;
  transition: 0.33s all;

  &:hover {
    color: ${mainTheme.palette.primary.main};
  }

  strong {
    font-size: 16px;
  }
`;
