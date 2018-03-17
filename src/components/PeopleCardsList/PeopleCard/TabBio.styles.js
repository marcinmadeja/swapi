import styled from 'styled-components';
import mainTheme from 'constants/theme';

export const Content = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid ${mainTheme.palette.borderColor};

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.div`
  width: 150px;
`;

export const Value = styled.div`
  margin-left: auto;
  color: ${mainTheme.palette.primary.main};
  font-size: 18px;
  font-weight: 500;
`;
