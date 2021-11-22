import { useState } from 'react';

import { Button, Collapse, FlexSpace, Title, Wrapper } from 'shared/components';
import { STab, STabList, STabPanel, STabs } from 'shared/components/Tab/Tab';
import { ERTitle } from './styled';

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
              <ERTitle>
                O escopo do trabalho para o projeto é estabelecido, mantido
                atualizado e utilizado.
              </ERTitle>
              <Collapse title="Projeto - 1" underline>
                <input type="file" />
                <></>
              </Collapse>
              <Collapse title="Projeto - 2" underline>
                <div>teste</div>
                <></>
              </Collapse>
              <Collapse title="Projeto - 3" underline>
                <div>teste</div>
                <></>
              </Collapse>
              <Collapse title="Projeto - 4" underline>
                <div>teste</div>
                <></>
              </Collapse>
            </Collapse>
            <Collapse title="GPR - 2">
              <ERTitle>
                O processo a ser utilizado para a execução do projeto é
                descrito, mantido atualizado e utilizado.
              </ERTitle>
              <Collapse title="Projeto - 1" underline>
                <div>teste</div>
                <></>
              </Collapse>
              <Collapse title="Projeto - 2" underline>
                <div>teste</div>
                <></>
              </Collapse>
              <Collapse title="Projeto - 3" underline>
                <div>teste</div>
                <></>
              </Collapse>
              <Collapse title="Projeto - 4" underline>
                <div>teste</div>
                <></>
              </Collapse>
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
