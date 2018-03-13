import styled, { css } from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${props => props.full && css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999999;
    width: 100%;
    height: 100%;
    background: #fff;
  `}

  ${props => props.fullHeight && css`
    height: calc(100vh - 30px);
  `}
`;

export const Label = styled.div`
  margin-top: 30px;
  font-size: 25px;
`;
