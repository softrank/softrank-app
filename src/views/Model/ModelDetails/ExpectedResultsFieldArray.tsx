import React, { useState } from 'react';
import { useFieldArray } from 'react-hook-form';

import { Collapse } from 'shared/components';
import { Input, InputGroup, Select, TextArea } from 'shared/components/Form';
import { ExpectedResult } from 'shared/models/expectedResult';
import { ModelLevel } from 'shared/models/modelLevel';
import { AddIcon, RemoveIcon } from './styled';

interface Props {
  processIndex: number;
  control: any;
  errors: any;
  levels: ModelLevel[];
}

export const ExpectedResultsFieldArray = (props: Props) => {
  const { processIndex, control, errors, levels } = props;
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
    const newExpectedResult = new ExpectedResult();
    append(newExpectedResult);
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
              <Select
                name={`modelProcesses[${processIndex}].expectedResults[${index}].minLevel`}
                label="Nível mínimo"
                placeholder="selecione um nível"
                control={control}
                rules={{ required: true }}
                optionValues={levels}
                optionLabel="initial"
                errors={
                  errors?.modelProcesses?.[processIndex]?.expectedResults?.[
                    index
                  ]?.minLevel
                }
              />
              <Select
                name={`modelProcesses[${processIndex}].expectedResults[${index}].maxLevel`}
                label="Nível máximo"
                placeholder="selecione um nível"
                control={control}
                rules={{ required: true }}
                optionValues={levels}
                optionLabel="initial"
                errors={
                  errors?.modelProcesses?.[processIndex]?.expectedResults?.[
                    index
                  ]?.maxLevel
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
