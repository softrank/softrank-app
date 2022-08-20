import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Modal, Wrapper, FlexSpace, Options, Button } from 'shared/components';
import { CheckboxContainer } from 'shared/components/Checkbox/styled';
import {
  Form,
  InputGroup,
  Label,
  ControlledCheckbox,
  FileInput,
  Input,
} from 'shared/components/Form';
import { IndicatorDto } from 'shared/dtos/indicatorDto';
import { evaluationService } from 'shared/services';
import { indicatorsService } from 'shared/services/indicatorsService';
import { EvidenceOCForm, EvidenceOCFormFile } from './evidenceOCForm';

interface Props {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  evaluationId: string;
  capacityId: string | undefined;
  loadCapacities: () => void;
}

export const EvidenceOCDetails = ({
  showModal,
  setShowModal,
  evaluationId,
  capacityId,
  loadCapacities,
}: Props) => {
  const [indicatorId, setIndicatorId] = useState<string>('');
  const [checkedProcesses, setCheckedProcesses] = useState<
    EvidenceOCFormFile[]
  >([]);

  const {
    control,
    reset,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EvidenceOCForm>();
  const { fields: files, append } = useFieldArray({
    control,
    name: `files`,
  });

  useEffect(() => {
    if (capacityId) {
      const type: { type: 'expectedResult' | 'modelCapacity' } = {
        type: 'modelCapacity',
      };

      indicatorsService
        .create(capacityId, type)
        .then((indicator) => setIndicatorId(indicator.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [capacityId]);

  useEffect(() => {
    evaluationService
      .getOrganizationalProcesses(evaluationId)
      .then((processes) => {
        processes.forEach((process) => {
          const file: EvidenceOCFormFile = {
            id: undefined,
            processId: process.id,
            processName: process.name,
            checked: true,
            content: undefined,
          };

          const exinstingFile = files.filter(
            (file) => file.processId === process.id
          );
          if (!exinstingFile.length) append(file);
        });
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evaluationId]);

  useEffect(() => {
    const subscription = watch((data) => setCheckedProcesses(data.files));
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = handleSubmit((data) => saveIndicator(data));

  const saveIndicator = (formData: EvidenceOCForm) => {
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
              file.processId,
              file.content
            );
        });
      })
      .finally(() => {
        setShowModal(false);
        loadCapacities();
      });
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
                <Label>Selecione o(s) processos(s):</Label>
                <CheckboxContainer>
                  {files.map((file, index) => {
                    return (
                      <ControlledCheckbox
                        key={index}
                        name={`files[${index}].checked`}
                        label={file.processName}
                        control={control}
                        defaultValue={file.checked}
                      />
                    );
                  })}
                </CheckboxContainer>
              </div>
            </InputGroup>
            <InputGroup style={{ flexWrap: 'wrap' }}>
              {files.map((file, index) => {
                return (
                  <React.Fragment key={index}>
                    {checkedProcesses[index]?.checked && (
                      <FileInput
                        width="49%"
                        label={file.processName}
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
