import { useState } from 'react';

import { Title } from 'shared/components';
import Wrapper from 'shared/components/Layouts/Wrapper';
import { STab, STabList, STabPanel, STabs } from 'shared/components/Tab/Tab';
import { modelDummy } from 'shared/services/modelDummy';
import { LevelsHierarchyTab } from './Tabs/LevelsHierarchyTab';
import { ModelTab } from './Tabs/ModelTab';
import { ProcessesTab } from './Tabs/ProcessesTab';

export const ModelTest = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [model, setModel] = useState(modelDummy);

  return (
    <Wrapper>
      <Title>Cadastrar modelo</Title>
      <STabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <STabList>
          <STab>Modelo</STab>
          <STab>Hierarquia</STab>
          <STab>Processos</STab>
        </STabList>
        <STabPanel>
          <ModelTab setTabIndex={setTabIndex} model={model} />
        </STabPanel>
        <STabPanel>
          <LevelsHierarchyTab
            setTabIndex={setTabIndex}
            model={model}
            setModel={setModel}
          />
        </STabPanel>
        <STabPanel>
          <ProcessesTab
            setTabIndex={setTabIndex}
            model={model}
            setModel={setModel}
          />
        </STabPanel>
      </STabs>
    </Wrapper>
  );
};
