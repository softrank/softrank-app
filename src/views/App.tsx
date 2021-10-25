import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from 'shared/components/PrivateRoute';

import { authActions } from 'shared/store';
import {
  NavBar,
  HomePage,
  SignIn,
  NotFound,
  GlobalStyles,
  EvaluatorManagment,
  EvaluatorDetails,
  ModelManagment,
  ModelDetails,
  Register,
  EvaluatorRegister,
  AuditorRegister,
  EvaluatorInstitutionRegister,
  OrganizationRegister,
  EvaluationDetails,
  EvaluationManagment,
  EvaluationNew,
  EvaluatorInstitutionManagment,
} from './';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    token && dispatch(authActions.signin(token));
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Route exact path="/" component={HomePage} />
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
            <Route
              exact
              path="/avaliadores/cadastro"
              component={EvaluatorDetails}
            />
            <Route exact path="/cadastro" component={Register} />
            <Route exact path="/auditor/cadastro" component={AuditorRegister} />
            <Route
              exact
              path="/instituicaoAvalidadora/cadastro"
              component={EvaluatorInstitutionRegister}
            />
            <Route
              exact
              path="/organizacao/cadastro"
              component={OrganizationRegister}
            />
            <PrivateRoute exact path="/modelos" component={ModelManagment} />
            <PrivateRoute exact path="/modelo" component={ModelDetails} />
            <PrivateRoute exact path="/modelo/:id" component={ModelDetails} />
            <PrivateRoute
              exact
              path="/avaliadores"
              component={EvaluatorManagment}
            />
            <PrivateRoute
              exact
              path="/avaliacoes"
              component={EvaluationManagment}
            />
            <PrivateRoute
              exact
              path="/avaliacao"
              component={EvaluationDetails}
            />
            <PrivateRoute
              exact
              path="/avaliacao/nova"
              component={EvaluationNew}
            />
            <PrivateRoute
              exact
              path="/avaliacao/:id"
              component={EvaluationDetails}
            />
            <Route
              exact
              path="/instituicoesAvaliadoras"
              component={EvaluatorInstitutionManagment}
            />
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        )}
      />
      <GlobalStyles />
    </>
  );
}
