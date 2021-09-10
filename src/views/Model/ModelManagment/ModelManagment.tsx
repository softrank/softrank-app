import React from 'react';

import Wrapper from 'shared/components/Layouts/Wrapper';
import { AddIcon, SearchBox, Title } from 'shared/components';
import { ModelsList } from 'views';
import { useHistory } from 'react-router';

export const ModelManagment = () => {
  const history = useHistory();
  const handleAddModel = () => history.push('/modelos/cadastro2');

  return (
    <Wrapper>
      <Title>Modelos</Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <AddIcon onClick={() => handleAddModel()} />
        <SearchBox />
      </div>
      <ModelsList />
    </Wrapper>
  );
};
