import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer'; // Update the path with your actual reducer path
import App from './App/App';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  uiReducer, // Add other reducers here if needed
});

// Create the Redux store
const store = createStore(rootReducer);

// Render the main App component within the Redux Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
