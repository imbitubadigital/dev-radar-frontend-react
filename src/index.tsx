import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Home />
    </AppProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
