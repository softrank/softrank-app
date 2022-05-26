import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ExitIcon, Table, Title, Wrapper } from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { Evalutation } from 'shared/models/evaluation';
import { evaluationService } from 'shared/services';

export const ModelManagerEvaluationList = () => {
  const [evaluations, setEvaluations] = useState<Evalutation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    evaluationService
      .get()
      .then((evaluations) => {
        setEvaluations(evaluations);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando avaliações..." />
      ) : (
        <Wrapper>
          <Title>Avaliações</Title>
          <Table
            headers={['Nome', 'Status', 'Organização', 'Nível', 'Aprovação']}
          >
            {evaluations.map((evaluation, id) => {
              return (
                <tr key={id}>
                  <td>{evaluation.name}</td>
                  <td>{evaluation.status}</td>
                  <td>{evaluation.organizationalUnit.name}</td>
                  <td>{evaluation.modelLevel.initial}</td>
                  <td>
                    <Link to={`/avaliacao/${evaluation.id}`}>
                      <ExitIcon />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </Table>
        </Wrapper>
      )}
    </>
  );
};
