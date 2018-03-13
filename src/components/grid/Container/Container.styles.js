import styled from 'styled-components';
import grid from '../utils/Grid.class';

const { gutter, getContainerWidth } = grid;

export const ContainerStyled = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: ${gutter};
	padding-right: ${gutter};
	${props => getContainerWidth(props)}
`;
