import styled from 'styled-components';

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
  background: ${props => props.theme.palette.background.default};
`;

export const FormContainer = styled.form`
  width: 400px;
  padding: 35px 30px;
  background: ${props => props.theme.palette.background.paper}
  border: 1px solid ${props => props.theme.palette.borderColor};
  border-radius: ${props => props.theme.borderRadius};
`;

export const AlertContainer = styled.div`
  margin-top: 30px;
`;
