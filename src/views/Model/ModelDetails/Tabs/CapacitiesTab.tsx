import { useFieldArray, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { HiOutlineTrash } from 'react-icons/hi';

import {
  AddIcon,
  Button,
  Collapse,
  Divider,
  FlexSpace,
  Options,
} from 'shared/components';
import {
  Form,
  Input,
  InputGroup,
  Select,
  TextArea,
} from 'shared/components/Form';
import { CapacityDto } from 'shared/dtos/capacityDto';
import { ModelLevel } from 'shared/models/modelLevel';
import { ModelEntity } from 'shared/models/modelEntity';
import { useEffect } from 'react';
import { Capacity } from 'shared/models/capacity';
import { modelsService } from 'shared/services';
import { useNavigate } from 'react-router';

interface Props {
  levels: ModelLevel[];
  setTabIndex: (tabIndex: number) => void;
  model: ModelEntity;
}

interface IForm {
  projectCapacities: FormCapacity[];
  organizationalCapacities: FormCapacity[];
}

type FormCapacity = {
  id?: string;
  name: string;
  type: 'O' | 'P';
  maxLevel: { label: string; value: string };
  minLevel: { label: string; value: string };
};

export const CapacitiesTab = ({ levels, setTabIndex, model }: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const {
    fields: projectCapacities,
    append: appendPC,
    remove: removePC,
  } = useFieldArray({
    control,
    name: 'projectCapacities',
  });

  const {
    fields: organizationalCapacities,
    append: appendOC,
    remove: removeOC,
  } = useFieldArray({
    control,
    name: 'organizationalCapacities',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const capacitiesDtos: FormCapacity[] = convertToFormFormat(
      model.modelCapacities
    );
    const capacitiesP = capacitiesDtos.filter(
      (capacity) => capacity.type === 'P'
    );
    const capacitiesO = capacitiesDtos.filter(
      (capacity) => capacity.type === 'O'
    );

    reset({
      projectCapacities: capacitiesP,
      organizationalCapacities: capacitiesO,
    });
  }, [model, reset]);

  const convertToFormFormat = (capacities: Capacity[]) => {
    return capacities.map((cp) => {
      const dto: FormCapacity = {
        id: cp.id,
        name: cp.name,
        type: cp.type,
        maxLevel: {
          label: cp.maxLevel.toString(),
          value: cp.maxLevel.toString(),
        },
        minLevel: {
          label: cp.minLevel.toString(),
          value: cp.minLevel.toString(),
        },
      };
      return dto;
    });
  };

  const handleAddCapacity = (type: 'O' | 'P') => {
    const capacity = {
      name: undefined,
      type: type,
      maxLevel: undefined,
      minLevel: undefined,
    };

    if (type === 'P') appendPC(capacity);
    if (type === 'O') appendOC(capacity);
  };

  const formatCapacities = (capacities: FormCapacity[]) => {
    return capacities.map((capacity) => {
      const formatedCapacity: CapacityDto = {
        type: capacity.type,
        name: capacity.name,
        minLevel: (capacity.minLevel = (capacity.minLevel as any).label),
        maxLevel: (capacity.maxLevel = (capacity.maxLevel as any).label),
      };

      if (capacity.id) formatedCapacity.id = capacity.id;

      return formatedCapacity;
    });
  };

  const handleSave = (data: IForm) => {
    const formatedOC = formatCapacities(data.organizationalCapacities);
    const formatedPC = formatCapacities(data.projectCapacities);
    const capacities = formatedOC.concat(formatedPC);

    const modelDto = {
      id: model.id,
      name: model.name,
      year: new Date(model.year),
      description: model.description,
      modelCapacities: capacities,
    };

    modelsService
      .updateCapacities(model.id, modelDto)
      .then(() => navigate('/modelos'));
  };

  const onSubmit = handleSubmit((data) => handleSave(data));

  return (
    <Form onSubmit={onSubmit}>
      <FlexSpace>
        <Collapse
          title="Capacidades de projeto"
          options={<AddIcon $outline onClick={() => handleAddCapacity('P')} />}
        >
          {projectCapacities.map((pc, index) => {
            return (
              <FlexSpace key={pc.id}>
                <InputGroup>
                  <TextArea
                    name={`projectCapacities[${index}].name`}
                    label="Nome"
                    placeholder="nome da capacidade"
                    control={control}
                    rules={{ required: true }}
                    errors={errors?.projectCapacities?.[index]?.name}
                  />
                </InputGroup>
                <InputGroup>
                  <Select
                    name={`projectCapacities[${index}].minLevel`}
                    label="Nível mínimo"
                    placeholder="selecione um nível"
                    control={control}
                    rules={{ required: true }}
                    optionValues={levels}
                    optionLabel="initial"
                    errors={errors?.projectCapacities?.[index]?.minLevel}
                  />
                  <Select
                    name={`projectCapacities[${index}].maxLevel`}
                    label="Nível máximo"
                    placeholder="selecione um nível"
                    control={control}
                    rules={{ required: true }}
                    optionValues={levels}
                    optionLabel="initial"
                    errors={errors?.projectCapacities?.[index]?.maxLevel}
                  />
                </InputGroup>
                <RemoveCapacityIcon onClick={() => removePC(index)} />
                {index !== projectCapacities.length - 1 && <Divider />}
              </FlexSpace>
            );
          })}
        </Collapse>
        <Collapse
          title="Capacidades organizacionais"
          options={<AddIcon $outline onClick={() => handleAddCapacity('O')} />}
        >
          {organizationalCapacities.map((oc, index) => {
            return (
              <FlexSpace key={oc.id}>
                <InputGroup>
                  <Input
                    name={`organizationalCapacities[${index}].name`}
                    label="Nome"
                    placeholder="nome da capacidade"
                    control={control}
                    rules={{ required: true }}
                    errors={errors?.organizationalCapacities?.[index]?.name}
                  />
                </InputGroup>
                <InputGroup>
                  <Select
                    name={`organizationalCapacities[${index}].minLevel`}
                    label="Nível mínimo"
                    placeholder="selecione um nível"
                    control={control}
                    rules={{ required: true }}
                    optionValues={levels}
                    optionLabel="initial"
                    errors={errors?.organizationalCapacities?.[index]?.minLevel}
                  />
                  <Select
                    name={`organizationalCapacities[${index}].maxLevel`}
                    label="Nível máximo"
                    placeholder="selecione um nível"
                    control={control}
                    rules={{ required: true }}
                    optionValues={levels}
                    optionLabel="initial"
                    errors={errors?.organizationalCapacities?.[index]?.maxLevel}
                  />
                </InputGroup>
                <RemoveCapacityIcon onClick={() => removeOC(index)} />
                {index !== organizationalCapacities.length - 1 && <Divider />}
              </FlexSpace>
            );
          })}
        </Collapse>
        <Options>
          <Button secondary onClick={() => setTabIndex(2)}>
            Voltar
          </Button>
          <Button type="submit">Salvar</Button>
        </Options>
      </FlexSpace>
    </Form>
  );
};

const RemoveCapacityIcon = styled(HiOutlineTrash)`
  display: block;
  position: relative;

  width: 100%;
  max-width: 400px;
  height: 2.4em;
  padding: 0.2em;
  margin: auto;

  border: 2px solid ${({ theme }) => theme.disabledText};
  border-radius: 10px;

  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.disabledText};

  outline: none;

  cursor: pointer;
  transition: all 600ms ease;

  &:hover {
    box-shadow: 0 8px 16px 0 rgb(39 17 45 / 10%);
    background-color: ${({ theme }) => theme.accentBackground};
    border: 2px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
  }
`;
