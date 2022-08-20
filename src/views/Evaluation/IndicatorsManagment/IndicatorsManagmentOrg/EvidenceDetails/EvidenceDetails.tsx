import React, { useState, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { Button, FlexSpace, Modal, Options, Wrapper } from 'shared/components';
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
import { indicatorsService } from 'shared/services/indicatorsService';
import { IndicatorDto } from 'shared/dtos/indicatorDto';
import { CheckboxContainer } from 'shared/components/Checkbox/styled';

interface Props {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  evaluationId: string;
  expectedResultId: string;
  indicatorId: string | undefined;
  loadProcesses: (id: string) => void;
}

export const EvidenceDetails = (props: Props) => {
  const {
    showModal,
    setShowModal,
    evaluationId,
    expectedResultId,
    loadProcesses,
  } = props;

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
    evaluationService.getById(evaluationId).then((evaluation) => {
      evaluation.projects.forEach((project) => {
        const file: EvidenceDetailsFormFile = {
          id: undefined,
          projectId: project.id,
          projectName: project.name,
          checked: true,
          content: undefined,
        };
        const exinstingFile = files.filter(
          (file) => file.projectId === project.id
        );
        if (!exinstingFile.length) append(file);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evaluationId]);

  useEffect(() => {
    if (props.indicatorId) return setIndicatorId(props.indicatorId);

    if (expectedResultId) {
      const type: { type: 'expectedResult' | 'modelCapacity' } = {
        type: 'expectedResult',
      };

      indicatorsService
        .create(expectedResultId, type)
        .then((indicator) => setIndicatorId(indicator.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expectedResultId, props.indicatorId]);

  useEffect(() => {
    const subscription = watch((data) => setCheckedProjects(data.files));
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

        loadProcesses(evaluationId);
      })
      .finally(() => setShowModal(false));
  };

  return (
    <Modal
      title="Fonte de evidência"
      showModal={showModal}
      setShowModal={setShowModal}
      width="auto"
      height="auto"
    >
      <Wrapper style={{ padding: '2rem 0 0 0' }}>
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
                <CheckboxContainer>
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
                </CheckboxContainer>
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
    </Modal>
  );
};
