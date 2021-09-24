import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
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
            <Route exact path="/modelos" component={ModelManagment} />
            <Route exact path="/modelo" component={ModelDetails} />
            <Route exact path="/modelo/:id" component={ModelDetails} />
            <Route exact path="/modelo/:id/:tab" component={ModelDetails} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/avaliadores" component={EvaluatorManagment} />
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
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        )}
      />
      <GlobalStyles />
    </>
  );
}
