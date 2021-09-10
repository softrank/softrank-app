import React, { useState } from 'react';
import { useFieldArray } from 'react-hook-form';

import { Collapse } from 'shared/components';
import { Input, InputGroup, TextArea } from 'shared/components/Form';
import { ExpectedResult } from 'shared/models/expectedResult';
import { AddIcon, RemoveIcon } from './styled';

interface Props {
  processIndex: number;
  control: any;
  errors: any;
}

export const ExpectedResultsFieldArray = (props: Props) => {
  const { processIndex, control, errors } = props;
  const [collapseProcesses, setCollapseProcesses] = useState(false);

  const {
    fields: expectedResults,
    remove,
    append,
  } = useFieldArray({
    control,
    name: `modelProcesses[${processIndex}].expectedResults`,
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

  return (
    <Collapse
      underline
      title="Resultados esperados (RE)"
      collapse={collapseProcesses}
      setCollapse={setCollapseProcesses}
      options={<AddIcon onClick={() => handleAddExpectedResult()} />}
    >
      {expectedResults.map((er, index) => {
        return (
          <Collapse
            key={er.id}
            title={`RE ${index + 1}`}
            options={<RemoveIcon onClick={() => remove(index)} />}
          >
            <InputGroup>
              <Input
                name={`modelProcesses[${processIndex}].expectedResults[${index}].initial`}
                label="Sigla"
                placeholder="sigla do resultado esperado"
                control={control}
                rules={{ required: true }}
                errors={
                  errors?.modelProcesses?.[processIndex]?.expectedResults?.[
                    index
                  ]?.initial
                }
              />
            </InputGroup>
            <InputGroup>
              <TextArea
                name={`modelProcesses[${processIndex}].expectedResults[${index}].description`}
                label="Descrição"
                placeholder="descrição do resultado esperado"
                control={control}
                rules={{ required: true }}
                errors={
                  errors?.modelProcesses?.[processIndex]?.expectedResults?.[
                    index
                  ]?.description
                }
              />
            </InputGroup>
          </Collapse>
        );
      })}
    </Collapse>
  );
};
