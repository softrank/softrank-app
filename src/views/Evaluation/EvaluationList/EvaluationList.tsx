import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ExitIcon, Table } from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { Evalutation } from 'shared/models/evaluation';
import { evaluatorService } from 'shared/services';

export const EvaluationList = () => {
  const [evaluations, setEvaluations] = useState<Evalutation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    evaluatorService
      .getEvaluations()
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
        <Table headers={['Nome', 'Status', 'Organização', 'Nível', 'Ações']}>
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
      )}
    </>
  );
};
