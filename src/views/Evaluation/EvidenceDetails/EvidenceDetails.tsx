import React, { useState, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Button, FlexSpace, Options, Wrapper } from 'shared/components';
import {
  Form,
  InputGroup,
  FileInput,
  Input,
  Label,
  ControlledCheckbox,
} from 'shared/components/Form';
import {
  EvidenceDetailsForm,
  EvidenceDetailsFormFile,
} from './evidenceDetailsForm';
import { evaluationService } from 'shared/services';
import { LoadingScreen } from 'shared/components/Loading';

interface Props {
  setShowModal: (state: boolean) => void;
  evaluationId: string;
  expectedResultId: string | undefined;
}

export const EvidenceDetails = ({
  setShowModal,
  evaluationId,
  expectedResultId,
}: Props) => {
  const [loading, setLoading] = useState(true);
  const [checkedProjects, setCheckedProjects] = useState<
    EvidenceDetailsFormFile[]
  >([]);

  const {
    control,
    reset,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EvidenceDetailsForm>();
  const { fields: files, append } = useFieldArray({
    control,
    name: `files`,
  });

  // useEffect(() => {
  //   reset({
  //     id: model.id,
  //   });
  // }, [expectedResultId]);

  useEffect(() => {
    evaluationService
      .getById(evaluationId)
      .then((evaluation) => {
        evaluation.projects.forEach((pd, index) => {
          const file: EvidenceDetailsFormFile = {
            id: undefined,
            projectId: pd.id,
            projectName: pd.name,
            checked: true,
            content: undefined,
          };
          const exinstingFile = files.filter(
            (file) => file.projectId === pd.id
          );
          if (exinstingFile.length <= 0) append(file);
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evaluationId]);

  const onSubmit = handleSubmit((data) => console.log(data));

  useEffect(() => {
    const subscription = watch((data) => {
      setCheckedProjects(data.files);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando projetos..." />
      ) : (
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
                  errors={errors?.qualityAssuranceGroup}
                />
              </InputGroup>
              <InputGroup>
                <div>
                  <Label>Selecione o(s) projeto(s):</Label>
                  <CheckBoxContainer>
                    {files.map((file, index) => {
                      return (
                        <ControlledCheckbox
                          key={index}
                          name={`files[${index}].checked`}
                          label={file.projectName}
                          control={control}
                          defaultValue={file.checked}
                        />
                      );
                    })}
                  </CheckBoxContainer>
                </div>
              </InputGroup>
              <InputGroup>
                {files.map((file, index) => {
                  return (
                    <React.Fragment key={index}>
                      {checkedProjects[index]?.checked && (
                        <FileInput
                          label={file.projectName}
                          name={`files[${index}].content`}
                          control={control}
                          rules={{ required: true }}
                          reset={reset}
                          getValues={getValues}
                          errors={errors?.qualityAssuranceGroup}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </InputGroup>
              <Options>
                <Button
                  secondary
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </Options>
            </FlexSpace>
          </Form>
        </Wrapper>
      )}
    </>
  );
};

const CheckBoxContainer = styled.div`
  margin-top: 0.4em;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;
