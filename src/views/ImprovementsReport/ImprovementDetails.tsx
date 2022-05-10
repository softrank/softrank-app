import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { FlexSpace, Button, Options } from 'shared/components';
import {
  Form,
  InputGroup,
  RadioGroup,
  Radio,
  TextArea,
  Select,
} from 'shared/components/Form';
import { EvaluatorInstitution } from 'shared/models/evaluatorInstitution';
import { evaluatorInstitutionService } from 'shared/services';

interface Props {
  setShowModal: (state: boolean) => void;
}

export const ImprovementDetails = ({ setShowModal }: Props) => {
  const [institutions, setInstitutions] = useState<EvaluatorInstitution[]>([]);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = handleSubmit((data) => console.log(data));

  useEffect(() => {
    evaluatorInstitutionService
      .list()
      .then((instituitions) => {
        setInstitutions(instituitions);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      <FlexSpace>
        <InputGroup>
          <Select
            name="level"
            label="Processo"
            placeholder="selecione"
            optionValues={institutions}
            optionLabel="name"
            control={control}
            rules={{ required: true }}
            errors={errors?.level}
          />
          <Select
            name="expectedResult"
            label="Resultado esperado"
            placeholder="selecione"
            optionValues={institutions}
            optionLabel="name"
            control={control}
            rules={{ required: true }}
            errors={errors?.expectedResult}
          />
          <RadioGroup label="Categoria">
            <Radio
              name="category"
              value="required"
              legend="Requerido"
              register={register}
            />
            <Radio
              name="category"
              value="improvement"
              legend="Melhoria"
              register={register}
            />
          </RadioGroup>
        </InputGroup>
        <InputGroup>
          <TextArea
            name="problem"
            label="Problema"
            placeholder="descreva o problema"
            control={control}
          />
          <TextArea
            name="suggestion"
            label="Sugestão para corrigir"
            placeholder="descreva a sugestão"
            control={control}
          />
        </InputGroup>
        <Options>
          <Button secondary type="button" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button type="submit">Salvar</Button>
        </Options>
      </FlexSpace>
    </Form>
  );
};
