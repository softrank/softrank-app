import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { Title, Wrapper } from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { ErrorMessage } from 'shared/components/Messages';
import { STab, STabList, STabPanel, STabs } from 'shared/components/Tab/Tab';
import { ModelDto } from 'shared/dtos/modelDto';
import { ModelEntity } from 'shared/models/modelEntity';
import { modelsService } from 'shared/services';
import { ModelTab, LevelsHierarchyTab, ProcessesTab } from './Tabs';
import { CapacitiesTab } from './Tabs/CapacitiesTab';

export const ModelDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [model, setModel] = useState(new ModelEntity());
  const [levelsTabDisabled, setLevelsTabDisabled] = useState(true);
  const [processesTabDisabled, setProcessesTabDisabled] = useState(true);
  const [capacitiesTabDisabled, setCapacitiesTabDisabled] = useState(true);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [modelLoading, setModelLoading] = useState(false);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const createOrUpdateModel = async (data: ModelDto, tabIndex: number) => {
    setLoading(true);
    let response: ModelEntity;

    try {
      if (data.id) {
        response = await modelsService.update(data);
      } else {
        response = await modelsService.create(data);
      }
      setModel(response);
      tabsHandler(tabIndex);
    } catch (e: any) {
      setErrorMessage(e.response.data.message);
      setShowError(true);
    }

    setLoading(false);
  };

  const tabsHandler = (tab: number) => {
    if (tab === 1) setLevelsTabDisabled(false);
    if (tab === 2) {
      setLevelsTabDisabled(false);
      setProcessesTabDisabled(false);
    }
    if (tab === 3) {
      setCapacitiesTabDisabled(false);
    }
    if (tab === 4) {
      navigate('/modelos');
    } else {
      setTabIndex(tab);
    }
  };

  useEffect(() => {
    const getModel = async () => {
      if (id) {
        setModelLoading(true);
        const res = await modelsService.details(id);
        setModel(res);
        if (model.modelLevels) setLevelsTabDisabled(false);
        if (model.modelProcesses) setProcessesTabDisabled(false);
        if (model.modelCapacities) setCapacitiesTabDisabled(false);
        setModelLoading(false);
      }
    };
    getModel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {modelLoading ? (
        <LoadingScreen loading={loading} content="Carregando modelo..." />
      ) : (
        <Wrapper>
          <Title>Modelo</Title>
          <STabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <STabList>
              <STab>Modelo</STab>
              <STab disabled={levelsTabDisabled}>Hierarquia</STab>
              <STab disabled={processesTabDisabled}>Processos</STab>
              <STab disabled={capacitiesTabDisabled}>Capacidades</STab>
            </STabList>
            <STabPanel>
              <ModelTab
                model={model}
                createOrUpdateModel={createOrUpdateModel}
                loading={loading}
              />
            </STabPanel>
            <STabPanel>
              <LevelsHierarchyTab
                setTabIndex={setTabIndex}
                model={model}
                setModel={setModel}
                createOrUpdateModel={createOrUpdateModel}
                loading={loading}
              />
            </STabPanel>
            <STabPanel>
              <ProcessesTab
                setTabIndex={setTabIndex}
                model={model}
                createOrUpdateModel={createOrUpdateModel}
                loading={loading}
              />
            </STabPanel>
            <STabPanel>
              <CapacitiesTab
                levels={model.modelLevels}
                setTabIndex={setTabIndex}
                model={model}
                createOrUpdateModel={createOrUpdateModel}
              />
            </STabPanel>
          </STabs>
          {showError && (
            <ErrorMessage
              setShowMessage={setShowError}
              showMessage={showError}
              errorMessage={errorMessage}
            />
          )}
        </Wrapper>
      )}
    </>
  );
};
