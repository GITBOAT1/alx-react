// src/actions/uiActionCreators.js
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
  } from './uiActionTypes';
import { bindActionCreators } from 'redux';
import * as uiActionCreators from './uiActionCreators';


// Create an object with all action creators
const uiActions = { ...uiActionCreators };

  // Action creator for login
  export const login = (email, password) => {
    return (dispatch) => {
      dispatch({ type: LOGIN });
  
      // Simulate API call (replace with actual API call)
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Simulate success and failure cases
          if (data.success) {
            dispatch({ type: LOGIN_SUCCESS, user: data.user });
          } else {
            dispatch({ type: LOGIN_FAILURE, error: data.error });
          }
        })
        .catch((error) => {
          dispatch({ type: LOGIN_FAILURE, error: 'An error occurred' });
        });
    };
  };
  
  // Action creator for logout
  export const logout = () => {
    return {
      type: LOGOUT,
    };
  };
  
  // Action creator for displaying the notification drawer
  export const displayNotificationDrawer = () => {
    return {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
  };
  
  // Action creator for hiding the notification drawer
  export const hideNotificationDrawer = () => {
    return {
      type: HIDE_NOTIFICATION_DRAWER,
    };
  };

// Bind the action creators to the dispatch function
export const boundUiActionCreators = (dispatch) =>
  bindActionCreators(uiActions, dispatch);
  