import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { evaluatorService } from 'shared/services';
import { authActions, RootState } from 'shared/store';
import {
  NavBar,
  HomePage,
  SignIn,
  NotFound,
  GlobalStyles,
  EvaluatorManagment,
  EvaluatorDetails,
  ModelManagment,
} from './';
import { ModelDetails } from './Model/ModelDetails/ModelDetails';

export default function App() {
  const dispatch = useDispatch();
  const auth = useSelector<RootState>((state) => state.auth.isAuthenticated);
  const token = useSelector<RootState>((state) => state.auth.token);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    token && dispatch(authActions.signin(token));
  }, [dispatch]);

  useEffect(() => {
    auth &&
      evaluatorService
        .get(token)
        .then((res) => {
          dispatch(authActions.setUser(res));
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [auth]);

  return (
    <>
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Switch>
            <Route exact path="/modelos" component={ModelManagment} />
            <Route exact path="/cadastro/modelo" component={ModelDetails} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/avaliadores" component={EvaluatorManagment} />
            <Route
              exact
              path="/cadastro/avaliador"
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
