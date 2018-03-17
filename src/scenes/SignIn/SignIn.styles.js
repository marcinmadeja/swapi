import styled from 'styled-components';
import mainTheme from 'constants/theme';

export const styles = {
  input: {
    marginBottom: 20,
  },
};

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${mainTheme.palette.background.default};
`;

export const FormContainer = styled.form`
  width: 400px;
  padding: 35px 30px;
  background: ${mainTheme.palette.background.paper}
  border: 1px solid ${mainTheme.palette.borderColor};
  border-radius: ${mainTheme.borderRadius};
`;

export const AlertContainer = styled.div`
  margin-top: 30px;
`;
