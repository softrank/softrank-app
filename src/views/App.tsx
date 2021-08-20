import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { authActions } from 'shared/store';
import {
  NavBar,
  HomePage,
  ModelForm,
  ModelsList,
  SignIn,
  NotFound,
  GlobalStyles,
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
            <Route exact path="/cadastrarModelo" component={ModelForm} />
            <Route exact path="/listarModelos" component={ModelsList} />
            <Route exact path="/signIn" component={SignIn} />
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        )}
      />
      <GlobalStyles />
    </>
  );
}
