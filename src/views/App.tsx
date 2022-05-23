import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from 'shared/components/PrivateRoute';
import { userService } from 'shared/services';

import { authActions, RootState } from 'shared/store';
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
  InitialEvaluationTeam,
  EvaluationHome,
  InitialEvaluationOrg,
} from './';

export default function App() {
  const [userRoles, setUserRoles] = useState<any[]>([]);
  const dispatch = useDispatch();
  const roles = useSelector<RootState>((state) => state.auth.roles);

  useEffect(() => {
    const authToken = window.localStorage.getItem('authToken');

    if (authToken && authToken !== 'undefined') {
      dispatch(authActions.setToken(authToken));
      userService
        .details()
        .then((roles) => dispatch(authActions.setRoles(roles)));
    } else dispatch(authActions.signOut());
  }, [dispatch]);

  useEffect(() => {
    const rolesArray: any[] = roles as any[];
    setUserRoles(rolesArray);
  }, [roles]);

  return (
    <>
      <NavBar />
      <PrivateRoute exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Switch>
            <Route exact path="/login" component={SignIn} />
            <Route
              exact
              path="/avaliador/cadastro"
              component={EvaluatorRegister}
            />
            <Route exact path="/cadastro" component={Register} />
            <Route exact path="/auditor/cadastro" component={AuditorRegister} />
            <Route
              exact
              path="/organizacao/cadastro"
              component={OrganizationRegister}
            />
            <Route
              exact
              path="/instituicaoAvalidadora/cadastro"
              component={EvaluatorInstitutionRegister}
            />
            <PrivateRoute exact path="/modelo" component={ModelDetails} />
            <PrivateRoute exact path="/modelo/:id" component={ModelDetails} />
            <PrivateRoute
              exact
              path="/avaliadores"
              component={EvaluatorManagment}
            />
            <PrivateRoute
              exact
              path="/instituicoesAvaliadoras"
              component={EvaluatorInstitutionManagment}
            />
            {userRoles.includes('modelManager') && (
              <PrivateRoute exact path="/modelos" component={ModelManagment} />
            )}
            {(userRoles.includes('evaluator') ||
              userRoles.includes('organizationalUnit')) && (
              <PrivateRoute
                exact
                path="/avaliacao/:id"
                component={EvaluationHome}
              />
            )}
            {userRoles.includes('evaluator') && (
              <>
                <PrivateRoute
                  exact
                  path="/avaliacao/planilha-de-requisitos/:id"
                  component={InitialEvaluationTeam}
                />
                <PrivateRoute
                  exact
                  path="/relatorio-de-melhorias/:id"
                  component={ImprovementsReport}
                />
                <PrivateRoute
                  exact
                  path="/avaliacao-nova"
                  component={EvaluationNew}
                />
                <PrivateRoute
                  exact
                  path="/avaliacoes"
                  component={EvaluationManagment}
                />
              </>
            )}
            {userRoles.includes('organizationalUnit') && (
              <PrivateRoute
                exact
                path="/avaliacao/planilha-de-requisitos/:id"
                component={InitialEvaluationOrg}
              />
            )}

            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        )}
      />
      <GlobalStyles />
    </>
  );
}
