import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { AppProvider } from './App/AppContext';


ReactDOM.render(
  <AppProvider>
    <App />,
  </AppProvider>,
  document.getElementById('root')
);

