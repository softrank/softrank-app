import styled from 'styled-components';

export const LoginForm = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: white;
`;

export const LoginBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background: linear-gradient(90deg, #efd5ff 0%, #515ada 100%);
`;

export const LoginImage = styled.img`
  width: 140%;
`;

export const LoginInfo = styled.div`
  position: absolute;
  width: 40%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginFormContent = styled.div`
  width: 60%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginTitle = styled.h1`
  position: relative;
  top: -100px;

  font-weight: 600;
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;

  color: var(--gray-700);

  @media (max-width: 640px) {
    font-size: 30px;
    margin: 0.2em 0 0.6em 0.3em;
  }
`;
