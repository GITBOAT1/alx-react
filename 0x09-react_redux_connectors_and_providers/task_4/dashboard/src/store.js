// src/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Replace with your actual rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
