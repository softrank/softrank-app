import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Wrapper, Title, AddIcon, SearchBox, Table } from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { Evaluator } from 'shared/Types/evaluator';
import { evaluatorService } from 'shared/services';
import { LongTableLine } from 'views/ImprovementsReport/styled';
import { TableOptions } from './styled';

export const EvaluatorManagment = () => {
  const navigate = useNavigate();

  const [evaluators, setEvaluators] = useState<Evaluator[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddEvaluator = () => navigate('/avaliadores/cadastro');

  useEffect(() => {
    setLoading(true);
    evaluatorService.listAll().then((evaluators) => setEvaluators(evaluators));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando avaliadores..." />
      ) : (
        <Wrapper>
          <Title>Avaliadores</Title>
          <TableOptions>
            <AddIcon onClick={() => handleAddEvaluator()} />
            <SearchBox />
          </TableOptions>
          <Table headers={['Nome', 'Email', 'Telefone']}>
            {evaluators.map((evaluator, id) => {
              return (
                <tr key={id}>
                  <LongTableLine>{evaluator.name}</LongTableLine>
                  <LongTableLine>{evaluator.email}</LongTableLine>
                  <td>{evaluator.phone}</td>
                </tr>
              );
            })}
          </Table>
        </Wrapper>
      )}
    </>
  );
};
