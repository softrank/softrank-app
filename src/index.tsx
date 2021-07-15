import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './app/layouts/App';
import { createBrowserHistory } from 'history';
import NavBar from './app/layouts/NavBar/NavBar';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <NavBar />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
