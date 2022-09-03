import styled from 'styled-components';

export const SignInBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: [SignInInfo] 40% [SignInForm] 60%;
  align-items: center;
  justify-content: center;

  background: linear-gradient(90deg, #efd5ff 0%, #515ada 100%);

  @media (max-width: 700px) {
    grid-template-columns: [SignInInfo] 0% [SignInForm] 100%;
  }
`;

export const SignInInfo = styled.div`
  grid-column: SignInInfo;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SignInForm = styled.div`
  grid-column: SignInForm;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6rem;

  background-color: ${({ theme }) => theme.body};
`;

export const SignInImage = styled.img`
  width: 140%;
`;

export const SignInFormContent = styled.div`
  width: 60%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10vh;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const SignInTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;

  color: ${({ theme }) => theme.text};

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const SignInInputs = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ErrorNote = styled.span`
  position: relative;
  width: 100%;
  left: 2px;

  font-size: 16px;
  text-align: left;
  font-weight: 500;

  color: var(--error);
`;

interface LinkProps {
  secondary?: boolean;
}

export const LinkButton = styled.a<LinkProps>`
  text-decoration: underline;
  text-decoration-thickness: 2px;
  font-size: 16px;
  font-weight: 700;

  color: ${({ secondary, theme }) => (secondary ? '#9794ff' : theme.accent)};
`;

export const RegisterInfo = styled.span`
  margin-left: 4px;

  display: flex;
  gap: 4px;

  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;
