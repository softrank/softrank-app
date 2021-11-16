import React, { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import { Collapse, AddIcon, Button, FlexSpace } from 'shared/components';
import {
  Form,
  InputGroup,
  Input,
  DateInput,
  TextArea,
} from 'shared/components/Form';
import { RemoveIcon, Options } from 'views/Model/ModelDetails/styled';
import { ModelDto } from 'shared/dtos/modelDto';
import { ModelEntity } from 'shared/models/modelEntity';
import {
  CollapseContent,
  GroupDivider,
} from 'shared/components/Collapse/styled';
import { ModelLevelDto } from 'shared/dtos/modelLevelDto';

interface Props {
  model: ModelEntity;
  createOrUpdateModel: (data: ModelDto, tabIndex: number) => Promise<void>;
  loading: boolean;
}

export const ModelTab = ({ model, createOrUpdateModel, loading }: Props) => {
  const history = useHistory();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ModelDto>();

  const {
    fields: levels,
    append: levelsAppend,
    remove: levelsRemove,
  } = useFieldArray({
    control,
    name: 'modelLevels',
  });

  const onSubmit = handleSubmit(
    async (data) => await createOrUpdateModel(data, 1)
  );

  useEffect(() => {
    const processes = model.modelProcesses;

    reset({
      id: model.id,
      name: model.name,
      year: new Date(model.year),
      description: model.description,
      modelLevels: model.modelLevels,
      modelProcesses: model.modelProcesses
        ? processes?.map((modelProcess) => {
            modelProcess.expectedResults?.forEach((expectedResult) => {
              expectedResult.minLevel = {
                value: expectedResult.minLevel,
                label: expectedResult.minLevel,
              } as any;
              expectedResult.maxLevel = {
                value: expectedResult.maxLevel,
                label: expectedResult.maxLevel,
              } as any;
            });
            return modelProcess;
          })
        : undefined,
    });
  }, [model, reset]);

  return (
    <Form onSubmit={onSubmit}>
      <FlexSpace>
        <InputGroup>
          <Input
            name="name"
            label="Modelo"
            placeholder="nome do modelo"
            control={control}
            rules={{ required: true }}
            errors={errors.name}
          />
          <DateInput
            label="Ano"
            name="year"
            placeholder="selecione um ano"
            yearPicker
            dateFormat="yyyy"
            control={control}
            rules={{ required: true }}
            errors={errors.year}
          />
        </InputGroup>
        <InputGroup>
          <TextArea
            name="description"
            label="Descrição"
            placeholder="descrição do modelo"
            control={control}
            rules={{ required: true }}
            errors={errors.description}
          />
        </InputGroup>
        <Collapse
          underline
          title="Níveis"
          options={
            <AddIcon onClick={() => levelsAppend(new ModelLevelDto())} />
          }
        >
          {levels.map(({ id }, index) => {
            return (
              <React.Fragment key={id}>
                <CollapseContent>
                  <InputGroup>
                    <Input
                      name={`modelLevels[${index}].initial`}
                      label="Sigla"
                      placeholder="sigla do nível"
                      control={control}
                      rules={{
                        required: true,
                        maxLength: {
                          value: 1,
                          message: 'A sigla deve conter no máximo 1 caractér!',
                        },
                      }}
                      errors={errors?.modelLevels?.[index]?.initial}
                    />
                    <Input
                      name={`modelLevels[${index}].name`}
                      label="Nome"
                      placeholder="nome do nível"
                      control={control}
                      rules={{ required: true }}
                      errors={errors?.modelLevels?.[index]?.name}
                    />
                    <RemoveIcon onClick={() => levelsRemove(index)} />
                  </InputGroup>
                </CollapseContent>
                {index !== levels.length - 1 && <GroupDivider />}
              </React.Fragment>
            );
          })}
        </Collapse>
        <Options>
          <Button secondary onClick={() => history.push('/modelos')}>
            Cancelar
          </Button>
          <Button type="submit" loading={loading}>
            Próximo
          </Button>
        </Options>
      </FlexSpace>
    </Form>
  );
};
