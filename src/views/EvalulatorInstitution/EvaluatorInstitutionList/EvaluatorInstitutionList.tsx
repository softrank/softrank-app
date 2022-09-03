import { useEffect, useState } from 'react';

import { Table } from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { EvaluatorInstitution } from 'shared/Types/evaluatorInstitution';
import { evaluatorInstitutionService } from 'shared/services/evaluatorInstitutionService';

export const EvaluatorInstitutionList = () => {
  const [institutions, setInstitutions] = useState<EvaluatorInstitution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    evaluatorInstitutionService
      .list()
      .then((response) => {
        setInstitutions(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando instituições..." />
      ) : (
        <Table headers={['Nome', 'Email', 'CNPJ', 'Telefone']}>
          {institutions.map((institution: EvaluatorInstitution, id) => {
            return (
              <tr key={id}>
                <td>{institution.name}</td>
                <td>{institution.email}</td>
                <td>{institution.documentNumber}</td>
                <td>{institution.phone}</td>
              </tr>
            );
          })}
        </Table>
      )}
    </>
  );
};
