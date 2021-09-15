import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import { Collapse, AddIcon, Button } from 'shared/components';
import {
  Form,
  InputGroup,
  Input,
  DateInput,
  TextArea,
} from 'shared/components/Form';
import {
  CollapseContent,
  LevelGroup,
  RemoveIcon,
  GroupDivider,
  Options,
} from 'views/Model/ModelDetails/styled';
import { ModelDto } from 'shared/dtos/modelDto';
import { ModelEntity } from 'shared/models/modelEntity';
import { ModelLevel } from 'shared/models/modelLevel';

interface Props {
  setTabIndex: Dispatch<SetStateAction<number>>;
  model: ModelEntity;
  setModel: Dispatch<SetStateAction<ModelEntity>>;
  setLevelsTabDisabled: Dispatch<SetStateAction<boolean>>;
}

export const ModelTab = ({
  setTabIndex,
  model,
  setModel,
  setLevelsTabDisabled,
}: Props) => {
  const [collapseLevels, setCollapseLevels] = useState(false);

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm<ModelDto>();

  const {
    fields: levels,
    append: levelsAppend,
    remove: levelsRemove,
  } = useFieldArray({
    control,
    name: 'levels',
  });

  const history = useHistory();

  const redirectHandler = (path: string) => history.push(path);

  const submitModelHandler = (data: ModelDto) => {
    let tempModel = model;

    tempModel = {
      id: data.name ?? '',
      name: data.name,
      year: data.year,
      description: data.description,
      modelLevels: data.levels,
      modelProcesses: model.modelProcesses,
    };

    setModel(tempModel);
    setLevelsTabDisabled(false);
    setTabIndex(1);
  };

  const onSubmit = handleSubmit((data) => submitModelHandler(data));

  useEffect(() => {
    register('name', { required: true });
    register('year', { required: true });
    register('description', {
      required: true,
      minLength: {
        value: 20,
        message: 'A descrição deve conter no mínimo 20 caracteres!',
      },
      maxLength: {
        value: 200,
        message: 'A descrição deve conter no máximo 200 caracteres!',
      },
    });
  }, [register]);

  useEffect(() => {
    if (model.modelLevels) {
      if (model.modelLevels.length <= 0) {
        levelsAppend({});
      }
    }
  }, [levelsAppend, model]);

  useEffect(() => {
    reset({
      id: model.id,
      name: model.name,
      year: model.year,
      description: model.description,
      levels: model.modelLevels,
    });
  }, [model, reset]);

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <Input
          name="name"
          label="Modelo"
          placeholder="selecione um modelo"
          control={control}
          errors={errors.name}
        />
        <DateInput
          label="Ano"
          name="year"
          placeholder="selecione um ano"
          control={control}
          yearPicker
          dateFormat="yyyy"
          errors={errors.year}
        />
      </InputGroup>
      <InputGroup>
        <TextArea
          name="description"
          label="Descrição"
          placeholder="descrição do modelo"
          control={control}
          errors={errors.description}
        />
      </InputGroup>
      <Collapse
        underline
        title="Níveis"
        collapse={collapseLevels}
        setCollapse={setCollapseLevels}
        options={<AddIcon onClick={() => levelsAppend(new ModelLevel())} />}
      >
        {levels.map(({ id }, index) => {
          return (
            <React.Fragment key={id}>
              <CollapseContent>
                <LevelGroup>
                  <Input
                    name={`levels[${index}].initial`}
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
                    errors={errors?.levels?.[index]?.initial}
                  />
                  <Input
                    name={`levels[${index}].name`}
                    label="Nome"
                    placeholder="nome do nível"
                    control={control}
                    rules={{ required: true }}
                    errors={errors?.levels?.[index]?.name}
                  />
                </LevelGroup>
                <RemoveIcon onClick={() => levelsRemove(index)} />
              </CollapseContent>
              {index !== levels.length - 1 && <GroupDivider />}
            </React.Fragment>
          );
        })}
      </Collapse>
      <Options>
        <Button secondary onClick={() => redirectHandler('/modelos')}>
          Cancelar
        </Button>
        <Button type="submit">Próximo</Button>
      </Options>
    </Form>
  );
};
