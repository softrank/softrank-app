import { Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../shared/styles/GlobalStyle';
import ModelsList from './ModelList/ModelsList';
import HomePage from './HomePage/HomePage';
import { NotFound } from './NotFound/NotFound';
import { ModelForm } from './ModelManagement/ModelForm';
import NavBar from './NavBar/NavBar';

export default function App() {
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
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        )}
      />
      <GlobalStyles />
    </>
  );
}
