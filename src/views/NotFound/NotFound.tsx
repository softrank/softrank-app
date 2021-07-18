import React from 'react';
import img404 from '../../shared/assets/images/404.svg';
import { Image404, Page404, Title404 } from './styled';

export const NotFound = () => {
  return (
    <Page404>
      <Title404>Ops! Parece que não encontramos a página desejada.</Title404>
      <Image404 src={img404} alt="Página não encontrada" />
    </Page404>
  );
};
