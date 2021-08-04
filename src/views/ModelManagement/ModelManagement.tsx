import { useEffect, useState } from 'react';
import Card, { CardTitle } from '../../shared/components/Card/Card';
import Wrapper from '../../shared/components/Layouts/Wrapper';
import {
  STabs,
  STabList,
  STab,
  STabPanel,
} from '../../shared/components/Tab/Tab';
import { ModelEntity } from '../../shared/models/modelEntity';
import { modelDummy } from '../../shared/services/modelDummy';
import { modelsService } from '../../shared/services/modelsService';
import { ModelForm } from './ModelForm';

export const ModelManagement = () => {
  const [models, setModels] = useState<ModelEntity[]>([]);
  const [model, setModel] = useState<ModelEntity>(modelDummy);

  useEffect(() => {
    modelsService.list().then((response) => {
      setModels(response);
    });
  }, []);

  return (
    <Wrapper>
      <Card>
        <CardTitle>Cadastrar modelo</CardTitle>
        <STabs>
          <STabList>
            <STab>Modelo</STab>
            <STab>Processos</STab>
          </STabList>
          <STabPanel>
            <ModelForm
              models={models}
              setModels={setModels}
              model={model}
              setModel={setModel}
            />
          </STabPanel>
          <STabPanel></STabPanel>
        </STabs>
      </Card>
    </Wrapper>
  );
};
