import { useEffect, useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import { Collapse } from '../../shared/components/Collapse/Collapse';
import Input from '../../shared/components/Form/Input/Input';
import { TextArea } from '../../shared/components/Form/TextArea/TextArea';
import { ExpectedResult } from '../../shared/models/expectedResult';
import { ModelEntity } from '../../shared/models/modelEntity';
import { AddIcon, InputGroup, RemoveIcon } from './styled';

interface Props {
  nestIndex: number;
  control: any;
  model: ModelEntity;
}

export const ExpectedResultsFieldArray = (props: Props) => {
  const { nestIndex, control, model } = props;

  const { fields, remove, append } = useFieldArray({
    control,
    name: `modelProcesses[${nestIndex}].expectedResults`,
  });

  const [collapseProcesses, setCollapseProcesses] = useState(false);

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

  const handleRemoveExpectedResult = (index: number) => {
    remove(index);
  };

  useEffect(() => {
    model.modelProcesses[nestIndex].expectedResults.map((er, index) => {
      append(er);
    });
  }, [model]);

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
            options={
              <RemoveIcon onClick={() => handleRemoveExpectedResult(index)} />
            }
          >
            <InputGroup>
              <Input
                name={`modelProcesses[${nestIndex}].expectedResults[${index}].initial`}
                label="Sigla"
                placeholder="sigla do resultado esperado"
                control={control}
              />
            </InputGroup>
            <InputGroup>
              <TextArea
                name={`modelProcesses[${nestIndex}].expectedResults[${index}].description`}
                label="Descrição"
                placeholder="descrição do resultado esperado"
                control={control}
              />
            </InputGroup>
          </Collapse>
        );
      })}
    </Collapse>
  );
};
