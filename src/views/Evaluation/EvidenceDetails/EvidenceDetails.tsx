import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Button, FlexSpace, Options, Wrapper } from 'shared/components';
import {
  Form,
  InputGroup,
  FileInput,
  Input,
  Label,
} from 'shared/components/Form';
import { ProjectsData } from 'shared/data/projects';
import { EvidenceDetailsForm } from './EvidenceDatailsForm';
import { Checkbox } from 'shared/components/Checkbox/Checkbox';
import React, { useState, useEffect } from 'react';

interface Props {
  setShowModal: (state: boolean) => void;
}

interface ProjectCheck {
  projectId: number;
  projectName: string;
  checked: boolean;
}

export const EvidenceDetails = (props: Props) => {
  const { setShowModal } = props;

  const [projectsChecked, setProjectsChecked] = useState<ProjectCheck[]>([]);

  const projectsData = ProjectsData;

  const {
    control,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<EvidenceDetailsForm>();

  useEffect(() => {
    const tempArray = projectsData.map((pd, index) => {
      let projectChecked: ProjectCheck = {
        projectId: pd.id,
        projectName: pd.name,
        checked: true,
      };
      return projectChecked;
    });
    setProjectsChecked(tempArray);
  }, [projectsData]);

  const onSubmit = handleSubmit((data) => console.log(data));

  const checkboxHandler = (checked: boolean, project: string) => {
    const projectsCopy = [...projectsChecked];
    const projectIndex = projectsCopy.findIndex(
      (pr) => pr.projectName === project
    );
    projectsCopy[projectIndex].checked = checked;
    setProjectsChecked(projectsCopy);
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <FlexSpace space="2rem">
          <InputGroup>
            <Input
              label="Fonte de evidência"
              name="name"
              placeholder="nome da fonte de evidência"
              control={control}
              rules={{
                required: true,
              }}
              errors={errors?.name}
            />
            <Input
              label="Grupo de garantia da qualidade"
              name="group"
              placeholder="nome do grupo"
              control={control}
              rules={{
                required: true,
              }}
              errors={errors?.group}
            />
          </InputGroup>
          <InputGroup>
            <div>
              <Label>Selecione o(s) projeto(s):</Label>
              <CheckBoxContainer>
                {projectsChecked.map((pc, index) => {
                  return (
                    <Checkbox
                      key={index}
                      label={pc.projectName}
                      checked={pc.checked}
                      onChange={(e) =>
                        checkboxHandler(e.target.checked, pc.projectName)
                      }
                    />
                  );
                })}
              </CheckBoxContainer>
            </div>
          </InputGroup>
          <InputGroup>
            {projectsChecked.map((pc, index) => {
              return (
                <React.Fragment key={index}>
                  {pc.checked && (
                    <FileInput
                      label={pc.projectName}
                      name={`project${pc.projectId}File`}
                      control={control}
                      rules={{ required: true }}
                      reset={reset}
                      getValues={getValues}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </InputGroup>
          <Options>
            <Button secondary type="button" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </Options>
        </FlexSpace>
      </Form>
    </Wrapper>
  );
};

const CheckBoxContainer = styled.div`
  margin-top: 0.4em;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;
