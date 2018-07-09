import styled from 'styled-components';

export const Alert = styled.div`
	display: flex;
	align-items: center;
	min-height: 44px;
	padding: 5px 25px;
	border: 1px solid transparent;

	color: rgba(0, 0, 0, 0.6);
	font-size: 17px;
	font-weight: 400;
	border-radius: 5px;

	box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const Main = styled.div`
	display: flex;
	align-items: center;
`;

export const AlertStandardStyled = Alert.extend`
	background: #F5F5F5;
`;

export const AlertSuccessStyled = Alert.extend`
	background: #388E3C;
	color: #fff;
`;

export const AlertWarningStyled = Alert.extend`
	background: #F9A825;
	color: #fff;
`;

export const AlertDangerStyled = Alert.extend`
	background: #C62828;
	color: #fff;
`;

export const ProgressBar = styled.div`
	margin-right: 15px;
`;
