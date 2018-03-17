import styled, { css } from 'styled-components';
import mainTheme from 'constants/theme';

export const ListTitle = styled.div`
	display: flex;
	align-items: center;
	height: 0;

	border: 1px solid ${mainTheme.palette.borderColor};
	border-width: 1px 0;
	padding-left: 12px;

	color: ${mainTheme.palette.primary.main};
	font-size: 14px;
	font-weight: 500;
	letter-spacing: 0.6px;

	overflow: hidden;
	opacity: 0;
	transform: translate(100%, 0);
	transition: 0.33s all 0.2s;

	${props => props.open && css`
		height: 32px;
		opacity: 1;
		transform: translate(0, 0);
	`}
`;
