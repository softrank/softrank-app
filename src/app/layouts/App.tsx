import { Route, Switch } from 'react-router-dom';
import ModelForm from '../../features/model-feature/form/ModelForm';
import { GlobalStyles } from '../../styles/GlobalStyle';
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';

export default function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Switch>
              <Route exact path="/createModel" component={ModelForm} />
            </Switch>
          </>
        )}
      />
      <GlobalStyles />
    </>
  );
}
