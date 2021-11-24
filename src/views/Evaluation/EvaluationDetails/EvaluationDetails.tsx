import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Collapse, FlexSpace, Title, Wrapper } from 'shared/components';
import { Form, Input, InputGroup, Select } from 'shared/components/Form';
import { STab, STabList, STabPanel, STabs } from 'shared/components/Tab/Tab';
import { ImplementationDegreesData } from 'shared/data/implementationDegrees';
import { ERTitle } from './styled';

export const EvaluationDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = handleSubmit((data) => console.log(data));

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
                <InputGroup>
                  <Input
                    name="name"
                    label="Nome"
                    placeholder="nome do arquivo"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    errors={errors?.name}
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    name="file"
                    label="Arquivo"
                    placeholder="arquivo"
                    type="file"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    errors={errors?.name}
                  />
                  <Select
                    name="implementationDegree"
                    label="Grau de implementação"
                    placeholder="selecione uma opção"
                    control={control}
                    rules={{ required: true }}
                    optionValues={ImplementationDegreesData}
                    optionLabel="label"
                    optionValue="value"
                    errors={errors?.implementationDegree}
                  />
                </InputGroup>
              </Collapse>
              <Collapse title="Projeto - 2" underline>
                <InputGroup>
                  <Input
                    name="name"
                    label="Nome"
                    placeholder="nome do arquivo"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    errors={errors?.name}
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    name="file"
                    label="Arquivo"
                    placeholder="arquivo"
                    type="file"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    errors={errors?.name}
                  />
                  <Select
                    name="implementationDegree"
                    label="Grau de implementação"
                    placeholder="selecione uma opção"
                    control={control}
                    rules={{ required: true }}
                    optionValues={ImplementationDegreesData}
                    optionLabel="label"
                    optionValue="value"
                    errors={errors?.implementationDegree}
                  />
                </InputGroup>
              </Collapse>
              <Collapse title="Projeto - 3" underline>
                <InputGroup>
                  <Input
                    name="name"
                    label="Nome"
                    placeholder="nome do arquivo"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    errors={errors?.name}
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    name="file"
                    label="Arquivo"
                    placeholder="arquivo"
                    type="file"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    errors={errors?.name}
                  />
                  <Select
                    name="implementationDegree"
                    label="Grau de implementação"
                    placeholder="selecione uma opção"
                    control={control}
                    rules={{ required: true }}
                    optionValues={ImplementationDegreesData}
                    optionLabel="label"
                    optionValue="value"
                    errors={errors?.implementationDegree}
                  />
                </InputGroup>
              </Collapse>
              <Collapse title="Projeto - 4" underline>
                <InputGroup>
                  <Input
                    name="name"
                    label="Nome"
                    placeholder="nome do arquivo"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    errors={errors?.name}
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    name="file"
                    label="Arquivo"
                    placeholder="arquivo"
                    type="file"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    errors={errors?.name}
                  />
                  <Select
                    name="implementationDegree"
                    label="Grau de implementação"
                    placeholder="selecione uma opção"
                    control={control}
                    rules={{ required: true }}
                    optionValues={ImplementationDegreesData}
                    optionLabel="label"
                    optionValue="value"
                    errors={errors?.implementationDegree}
                  />
                </InputGroup>
              </Collapse>
            </Collapse>
            <Collapse title="GPR - 2">
              <ERTitle>
                O processo a ser utilizado para a execução do projeto é
                descrito, mantido atualizado e utilizado.
              </ERTitle>
              <Form onSubmit={onSubmit}>
                <FlexSpace>
                  <InputGroup>
                    <Select
                      name="evaluatorInstitutionId"
                      label="Grau de implementação"
                      placeholder="selecione uma opção"
                      control={control}
                      rules={{ required: true }}
                      optionValues={ImplementationDegreesData}
                      optionLabel="label"
                      optionValue="value"
                      errors={errors?.evaluatorInstitutionId}
                    />
                    <Select
                      name="evaluatorInstitutionId2"
                      label="Projeto 2"
                      placeholder="selecione uma opção"
                      control={control}
                      rules={{ required: true }}
                      optionValues={ImplementationDegreesData}
                      optionLabel="label"
                      optionValue="value"
                      errors={errors?.evaluatorInstitutionId}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Select
                      name="evaluatorInstitutionId"
                      label="Projeto 3"
                      placeholder="selecione uma opção"
                      control={control}
                      rules={{ required: true }}
                      optionValues={ImplementationDegreesData}
                      optionLabel="label"
                      optionValue="value"
                      errors={errors?.evaluatorInstitutionId}
                    />
                    <Select
                      name="evaluatorInstitutionId2"
                      label="Projeto 4"
                      placeholder="selecione uma opção"
                      control={control}
                      rules={{ required: true }}
                      optionValues={ImplementationDegreesData}
                      optionLabel="label"
                      optionValue="value"
                      errors={errors?.evaluatorInstitutionId}
                    />
                  </InputGroup>
                </FlexSpace>
              </Form>
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
      <Button secondary width="6rem" onClick={() => onSubmit()}>
        Salvar
      </Button>
    </Wrapper>
  );
};
