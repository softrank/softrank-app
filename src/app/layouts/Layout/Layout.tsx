import React from 'react';
import ModelForm from '../../../features/model-feature/form/ModelForm';
import NavBar from '../NavBar/NavBar';
import { Container, Wrapper } from './styled';

export default function Layout() {
  return (
    <Container>
      <NavBar />
      <Wrapper>
        <ModelForm />
      </Wrapper>
    </Container>
  );
}
