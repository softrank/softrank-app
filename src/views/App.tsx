import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from 'shared/components';

import { userService } from 'shared/services';
import { authActions } from 'shared/store';
import {
  NavBar,
  HomePage,
  SignIn,
  NotFound,
  GlobalStyles,
  EvaluatorManagment,
  ModelManagment,
  ModelDetails,
  Register,
  EvaluatorRegister,
  AuditorRegister,
  EvaluatorInstitutionRegister,
  OrganizationRegister,
  EvaluationManagment,
  EvaluationNew,
  EvaluatorInstitutionManagment,
  ImprovementsReport,
  EvaluationHome,
  ModelManagerEvaluationList,
  ProjectCapacitiesManagmentOrg,
  IndicatorsManagmentTeam,
  ProjectCapacitiesManagmentTeam,
  IndicatorsManagmentOrg,
  OrganizationCapacitiesManagmentOrg,
  FinalEvaluationResult,
  OrganizationCapacitiesManagmentTeam,
} from './';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = window.localStorage.getItem('authToken');

    if (authToken && authToken !== 'undefined') {
      dispatch(authActions.setToken(authToken));
      userService
        .details()
        .then((roles) => dispatch(authActions.setRoles(roles)));
    } else dispatch(authActions.signOut());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />

        <Route path="/avaliador/cadastro" element={<EvaluatorRegister />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/auditor/cadastro" element={<AuditorRegister />} />
        <Route
          path="/organizacao/cadastro"
          element={<OrganizationRegister />}
        />
        <Route
          path="/instituicaoAvalidadora/cadastro"
          element={<EvaluatorInstitutionRegister />}
        />

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/modelo" element={<ModelDetails />} />
          <Route path="/modelo/:id" element={<ModelDetails />} />
        </Route>

        {/* Model Manager routes */}
        <Route element={<RequireAuth allowedRoles={['modelManager']} />}>
          <Route path="/modelos" element={<ModelManagment />} />
          <Route path="/avaliacoes" element={<ModelManagerEvaluationList />} />
          <Route path="/avaliadores" element={<EvaluatorManagment />} />
          <Route
            path="/instituicoesAvaliadoras"
            element={<EvaluatorInstitutionManagment />}
          />
        </Route>

        {/* Evaluator and Organizational Unit routes */}
        <Route
          element={
            <RequireAuth allowedRoles={['evaluator', 'organizationalUnit']} />
          }
        >
          <Route
            path="/relatorio-de-melhorias/:id"
            element={<ImprovementsReport />}
          />
          <Route
            path="/relatorio-de-melhorias/:id"
            element={<ImprovementsReport />}
          />
          <Route path="/avaliacao/home/:id" element={<EvaluationHome />} />
        </Route>

        {/* Evaluator routes */}
        <Route element={<RequireAuth allowedRoles={['evaluator']} />}>
          <Route
            path="/avaliacao/planilha-de-requisitos/:id"
            element={<IndicatorsManagmentTeam />}
          />
          <Route path="/avaliacao-nova" element={<EvaluationNew />} />
          <Route path="/avaliacoes" element={<EvaluationManagment />} />
          <Route
            path="/avaliacao/capacidades-de-projeto/:id"
            element={<ProjectCapacitiesManagmentTeam />}
          />
          <Route
            path="/avaliacao/capacidades-organizacionais/:id"
            element={<OrganizationCapacitiesManagmentTeam />}
          />
          <Route
            path="/avaliacao/resultados-final/:id"
            element={<FinalEvaluationResult />}
          />
        </Route>

        {/* Organizational Unit routes */}
        <Route element={<RequireAuth allowedRoles={['organizationalUnit']} />}>
          <Route
            path="/avaliacao/planilha-de-requisitos/:id"
            element={<IndicatorsManagmentOrg />}
          />
          <Route
            path="/avaliacao/capacidades-de-projeto/:id"
            element={<ProjectCapacitiesManagmentOrg />}
          />
          <Route
            path="/avaliacao/capacidades-organizacionais/:id"
            element={<OrganizationCapacitiesManagmentOrg />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyles />
    </>
  );
}
