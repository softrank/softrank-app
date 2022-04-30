import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  AddIcon,
  Button,
  Collapse,
  Divider,
  FlexSpace,
  ReadOnly,
  RemoveIcon,
  Title,
  Wrapper,
} from 'shared/components';
import { File } from 'shared/components/File/File';
import { FileInput, Input, InputGroup } from 'shared/components/Form';
import { RadioGroup } from 'shared/components/Form/RadioGroup/RadioGroup';
import { STab, STabList, STabPanel, STabs } from 'shared/components/Tab/Tab';
import { ERTitle } from './styled';

export const EvaluationDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Wrapper>
      <Title>Avaliação</Title>
      <STabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <STabList>
          <STab>Avaliação inicial - 1</STab>
          <STab>Avaliação inicial - 2</STab>
        </STabList>
        {/* Tela avaliacao inicial 1 */}
        <STabPanel>
          <FlexSpace space="1rem">
            <Collapse
              title="GPR - 1"
              options={
                <AddIcon
                  $outline={true}
                  onClick={() => console.log('me add')}
                />
              }
            >
              <ERTitle>
                O escopo do trabalho para o projeto é estabelecido, mantido
                atualizado e utilizado.
              </ERTitle>
              <Collapse
                title="Fonte de evidência - 1"
                underline
                options={
                  <RemoveIcon
                    $outline={true}
                    onClick={() => console.log('me add')}
                    $size="small"
                  />
                }
              >
                <InputGroup>
                  <Input
                    label="Fonte de evidência"
                    name="evidenceSource"
                    placeholder="nome da fonte de evidência"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    errors={errors?.name}
                  />
                  <Input
                    label="Grupo de garantia da qualidade"
                    name="evidenceSource"
                    placeholder="nome do grupo"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    errors={errors?.name}
                  />
                </InputGroup>
                <InputGroup>
                  <FileInput
                    label="Projeto 1"
                    name="file"
                    control={control}
                    rules={{ required: true }}
                    errors={errors?.evaluationPlan}
                    reset={reset}
                    getValues={getValues}
                  />
                  <FileInput
                    label="Projeto 2"
                    name="file"
                    control={control}
                    rules={{ required: true }}
                    errors={errors?.evaluationPlan}
                    reset={reset}
                    getValues={getValues}
                  />
                  <FileInput
                    label="Projeto 3"
                    name="file"
                    control={control}
                    rules={{ required: true }}
                    errors={errors?.evaluationPlan}
                    reset={reset}
                    getValues={getValues}
                  />
                  <FileInput
                    label="Projeto 4"
                    name="file"
                    control={control}
                    rules={{ required: true }}
                    errors={errors?.evaluationPlan}
                    reset={reset}
                    getValues={getValues}
                  />
                </InputGroup>
              </Collapse>
            </Collapse>
          </FlexSpace>
        </STabPanel>
        {/* Tela avaliacao inicial 2 */}
        <STabPanel>
          <FlexSpace space="1rem">
            <Collapse title="GPR - 1">
              <ERTitle>
                O escopo do trabalho para o projeto é estabelecido, mantido
                atualizado e utilizado.
              </ERTitle>
              <Collapse title="Documento de requisitos" underline>
                <InputGroup>
                  <ReadOnly label="Projeto" value="Projeto 2" />
                  <File label="Fonte de evidência" path="Outro arquivo" />
                  <RadioGroup label="Status">
                    {/* <Radio
                      name="status"
                      option="1"
                      control={control}
                      color="red"
                    />
                    <Radio
                      name="status"
                      option="2"
                      control={control}
                      color="yellow"
                    />
                    <Radio
                      name="status"
                      option="3"
                      control={control}
                      color="green"
                    /> */}
                  </RadioGroup>
                </InputGroup>
                <Divider />
              </Collapse>
            </Collapse>
          </FlexSpace>
        </STabPanel>
      </STabs>
      <Button secondary width="6rem" onClick={() => onSubmit()}>
        Salvar
      </Button>
    </Wrapper>
  );
};
