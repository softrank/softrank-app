import { Route, Switch } from 'react-router-dom';
import { GlobalStyles } from '../shared/styles/GlobalStyle';
import ModelsList from './ModelList/ModelsList';
import HomePage from './HomePage/HomePage';
import { NotFound } from './NotFound/NotFound';
import { ModelManagement } from './ModelManagement/ModelManagement';

export default function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Switch>
            <Route exact path="/cadastrarModelo" component={ModelManagement} />
            <Route exact path="/listarModelos" component={ModelsList} />
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        )}
      />
      <GlobalStyles />
    </>
  );
}
