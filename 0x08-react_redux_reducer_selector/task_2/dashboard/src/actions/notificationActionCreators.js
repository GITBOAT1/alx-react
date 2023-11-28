// src/actions/notificationActionCreators.js
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
// src/actions/notificationActionCreators.js
import { bindActionCreators } from 'redux';
import * as notificationActionTypes from './notificationActionTypes';
import * as notificationActionCreators from './notificationActionCreators';

// Create an object with all action creators
const notificationActions = { ...notificationActionCreators };

// Action creator for marking a notification as read
export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

// Action creator for setting the notification filter
export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};

// Bind the action creators to the dispatch function
export const boundNotificationActionCreators = (dispatch) =>
  bindActionCreators(notificationActions, dispatch);