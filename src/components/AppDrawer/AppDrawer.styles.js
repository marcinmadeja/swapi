import styled from 'styled-components';

const width = 270;
export const styles = {
  paper: {
    width: 70,
    transition: '0.33s all',
  },
  paperExtend: {
    width,
  },
};

export const DrawerContainer = styled.div`
  width: ${width}px;
  padding-top: 80px;
`;
