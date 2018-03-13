import styled from 'styled-components';
import grid from '../utils/Grid.class';

const { gutter } = grid;

export const RowStyled = styled.div`
	display: flex;
	flex-wrap: wrap;

	margin-left: -${gutter};
	margin-right: -${gutter};
`;
