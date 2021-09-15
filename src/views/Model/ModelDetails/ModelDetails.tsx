import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Title } from 'shared/components';
import Wrapper from 'shared/components/Layouts/Wrapper';
import { LoadingScreen } from 'shared/components/Loading';
import { STab, STabList, STabPanel, STabs } from 'shared/components/Tab/Tab';
import { ModelEntity } from 'shared/models/modelEntity';
import { modelsService } from 'shared/services';
import { modelDummy } from 'shared/services/modelDummy';
import { ModelTab, LevelsHierarchyTab, ProcessesTab } from './Tabs';

export const ModelDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [model, setModel] = useState(new ModelEntity());
  // const [model, setModel] = useState(modelDummy);
  const [levelsTabDisabled, setLevelsTabDisabled] = useState(true);
  const [processesTabDisabled, setProcessesTabDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      modelsService
        .details(id)
        .then((model) => {
          setModel(model);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando modelo..." />
      ) : (
        <Wrapper>
          <Title>Cadastrar modelo</Title>
          <STabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <STabList>
              <STab>Modelo</STab>
              <STab disabled={levelsTabDisabled}>Hierarquia</STab>
              <STab disabled={processesTabDisabled}>Processos</STab>
            </STabList>
            <STabPanel>
              <ModelTab
                setTabIndex={setTabIndex}
                model={model}
                setModel={setModel}
                setLevelsTabDisabled={setLevelsTabDisabled}
              />
            </STabPanel>
            <STabPanel>
              <LevelsHierarchyTab
                setTabIndex={setTabIndex}
                model={model}
                setModel={setModel}
                setProcessesTabDisabled={setProcessesTabDisabled}
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
      )}
    </>
  );
};
