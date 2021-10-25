import { useState } from 'react';

import { Button, Collapse, FlexSpace, Title, Wrapper } from 'shared/components';
import { STab, STabList, STabPanel, STabs } from 'shared/components/Tab/Tab';

export const EvaluationDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Wrapper>
      <Title>Avaliação</Title>
      <STabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <STabList>
          <STab>GPR</STab>
          <STab>REQ</STab>
          <STab>PCP</STab>
        </STabList>
        <STabPanel>
          <FlexSpace space="1rem">
            <Collapse title="GPR - 1">
              <div>Projeto 1</div>
              <div>Projeto 2</div>
              <div>Projeto 3</div>
              <div>Projeto 4</div>
            </Collapse>
            <Collapse title="GPR - 2">
              <div>Projeto 1</div>
              <div>Projeto 2</div>
              <div>Projeto 3</div>
              <div>Projeto 4</div>
            </Collapse>
            <Collapse title="GPR - 3">
              <div>Projeto 1</div>
              <div>Projeto 2</div>
              <div>Projeto 3</div>
              <div>Projeto 4</div>
            </Collapse>
          </FlexSpace>
        </STabPanel>
        <STabPanel>
          <div>req</div>
        </STabPanel>
        <STabPanel>
          <div>pcp</div>
        </STabPanel>
      </STabs>
      <Button secondary width="6rem" onClick={() => console.log('salvando')}>
        Salvar
      </Button>
    </Wrapper>
  );
};
