import { useEffect, useState } from 'react';
import { useFieldArray } from 'react-hook-form';

import { ExpectedResult } from '../../shared/models/expectedResult';
import { ModelEntity } from '../../shared/models/modelEntity';
import { AddIcon, InputGroup, RemoveIcon } from './styled';
import { Input, TextArea } from '../../shared/components/Form';
import { Collapse } from '../../shared/components';

interface Props {
  nestIndex: number;
  control: any;
  model: ModelEntity;
  errors: any;
}

export const ExpectedResultsFieldArray = (props: Props) => {
  const { nestIndex, control, model, errors } = props;
  const [collapseProcesses, setCollapseProcesses] = useState(false);

  const { fields, remove, append } = useFieldArray({
    control,
    name: `modelProcesses[${nestIndex}].expectedResults`,
  });

  const handleAddExpectedResult = () => {
    setCollapseProcesses(false);

    const expectedResult: ExpectedResult = {
      id: '',
      initial: '',
      description: '',
      modelLevels: [],
    };

    append(expectedResult);
  };

  useEffect(() => {
    if (model !== undefined) {
      model.modelProcesses[nestIndex].expectedResults.map((er, index) =>
        append(er)
      );
    }
  }, [model, append, nestIndex]);

  return (
    <Collapse
      underline
      title="Resultados esperados"
      collapse={collapseProcesses}
      setCollapse={setCollapseProcesses}
      options={<AddIcon onClick={() => handleAddExpectedResult()} />}
    >
      {fields.map((expectedResult, index) => {
        return (
          <Collapse
            key={expectedResult.id}
            title="Insira o sigla do resultado esperado*"
            options={<RemoveIcon onClick={() => remove(index)} />}
          >
            <InputGroup>
              <Input
                name={`modelProcesses[${nestIndex}].expectedResults[${index}].initial`}
                label="Sigla"
                placeholder="sigla do resultado esperado"
                control={control}
                rules={{ required: true }}
                errors={
                  errors?.modelProcesses?.[nestIndex]?.expectedResults?.[index]
                    ?.initial
                }
              />
            </InputGroup>
            <InputGroup>
              <TextArea
                name={`modelProcesses[${nestIndex}].expectedResults[${index}].description`}
                label="Descrição"
                placeholder="descrição do resultado esperado"
                control={control}
                rules={{ required: true }}
                errors={
                  errors?.modelProcesses?.[nestIndex]?.expectedResults?.[index]
                    ?.description
                }
              />
            </InputGroup>
          </Collapse>
        );
      })}
    </Collapse>
  );
};
