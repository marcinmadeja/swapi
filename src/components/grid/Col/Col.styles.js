import styled from 'styled-components';
import grid from '../utils/Grid.class';

const {
  gutter,
  getColWidth,
  push,
  pull,
} = grid;

export const ColStyled = styled.div`
  flex-grow: 1;
  position: relative;
  width: 100%;
  padding-left: ${gutter};
  padding-right: ${gutter};

  ${props => getColWidth(props)}
  ${props => push(props)}
  ${props => pull(props)}
`;
