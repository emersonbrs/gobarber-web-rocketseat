import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import store from './store';
/* O store do redux obrigatoriamente deve vir após a importação do ReactotronConfig
senão ele não vai ter acesso, por exemplo, as funções do sagaMonitor ou do createEnhancer */

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
