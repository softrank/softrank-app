import { Route, Switch } from 'react-router-dom';
import { ModelForm } from '../../features/model-feature/form/ModelForm';
import ModelsList from '../../features/model-feature/list/ModelsList';
import { GlobalStyles } from '../../styles/GlobalStyle';
import HomePage from './HomePage/HomePage';
import { NotFound } from './NotFound/NotFound';

export default function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Switch>
              <Route exact path="/cadastrarModelo" component={ModelForm} />
              <Route exact path="/listarModelos" component={ModelsList} />
              <Route path="*" exact={true} component={NotFound} />
            </Switch>
          </>
        )}
      />
      <GlobalStyles />
    </>
  );
}
