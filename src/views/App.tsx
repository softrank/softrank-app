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
            <Route exact path="/modelos/cadastro" component={ModelDetails} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/avaliadores" component={EvaluatorManagment} />
            <Route
              exact
              path="/avaliadores/cadastro"
              component={EvaluatorDetails}
            />
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        )}
      />
      <GlobalStyles />
    </>
  );
}
