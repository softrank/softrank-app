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
import { indicatorsService } from 'shared/services/indicatorsService';
import { IndicatorDto } from 'shared/dtos/indicatorDto';

interface Props {
  setShowModal: (state: boolean) => void;
  evaluationId: string;
  expectedResultId: string;
  indicatorId: string | undefined;
}

export const EvidenceDetails = (props: Props) => {
  const { setShowModal, evaluationId, expectedResultId } = props;

  const [loading, setLoading] = useState(true);
  const [checkedProjects, setCheckedProjects] = useState<
    EvidenceDetailsFormFile[]
  >([]);
  const [indicatorId, setIndicatorId] = useState<string>('');

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

  useEffect(() => {
    if (props.indicatorId) {
      setIndicatorId(props.indicatorId);
    } else {
      if (expectedResultId) {
        indicatorsService.create(expectedResultId).then((indicator) => {
          setIndicatorId(indicator.id);
          console.log(indicator);
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expectedResultId, props.indicatorId]);

  useEffect(() => {
    const subscription = watch((data) => {
      setCheckedProjects(data.files);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = handleSubmit((data) => saveIndicator(data));

  const saveIndicator = (formData: EvidenceDetailsForm) => {
    const indicatorInfo: IndicatorDto = {
      name: formData.name,
      qualityAssuranceGroup: formData.qualityAssuranceGroup,
    };

    const files = formData.files.filter((file) => file.checked === true);

    indicatorsService
      .update(indicatorInfo, indicatorId)
      .then((res) => {
        files.forEach((file) => {
          if (file.content)
            indicatorsService.createFile(
              indicatorId,
              file.projectId,
              file.content
            );
        });
        setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
        setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
        setShowModal(false);
      });
  };

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
                  name="qualityAssuranceGroup"
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
