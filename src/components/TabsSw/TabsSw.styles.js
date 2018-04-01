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
