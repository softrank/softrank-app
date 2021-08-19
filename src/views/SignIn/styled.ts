import styled from 'styled-components';

export const LoginBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: [loginInfo] 40% [loginForm] 60%;
  align-items: center;
  justify-content: center;

  background: linear-gradient(90deg, #efd5ff 0%, #515ada 100%);

  @media (max-width: 700px) {
    grid-template-columns: [loginInfo] 0% [loginForm] 100%;
  }
`;

export const LoginInfo = styled.div`
  grid-column: loginInfo;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginForm = styled.div`
  grid-column: loginForm;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: white;
`;

export const LoginImage = styled.img`
  width: 140%;
`;

export const LoginFormContent = styled.div`
  width: 60%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const LoginTitle = styled.h1`
  position: relative;
  top: -10vh;

  font-weight: 600;
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;

  color: var(--gray-700);

  @media (max-width: 640px) {
    font-size: 30px;
    margin: 0.2em 0 0.6em 0.3em;
  }
`;
