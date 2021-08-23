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

  background-color: white;

  @media (max-width: 700px) {
    padding-top: 8rem;
    justify-content: flex-start;
  }
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
  gap: 1rem;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const SignInTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;

  color: var(--gray-700);

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;
