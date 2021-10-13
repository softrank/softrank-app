import React from 'react';

import { AddIcon, SearchBox, Title, Wrapper } from 'shared/components';
import { ModelsList } from 'views';
import { useHistory } from 'react-router';

export const ModelManagment = () => {
  const history = useHistory();
  const handleAddModel = () => history.push('/modelo');

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
