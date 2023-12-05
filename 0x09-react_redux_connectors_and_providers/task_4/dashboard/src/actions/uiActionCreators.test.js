// src/actions/uiActionCreators.test.js
import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  } from './uiActionCreators';
  import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
  } from './uiActionTypes';
  
  // Test for login action creator
  test('login action creator returns the correct action object', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
  
    const action = login(email, password);
  
    expect(action).toEqual(expectedAction);
  });
  
  // Test for logout action creator
  test('logout action creator returns the correct action object', () => {
    const expectedAction = {
      type: LOGOUT,
    };
  
    const action = logout();
  
    expect(action).toEqual(expectedAction);
  });
  
  // Test for displayNotificationDrawer action creator
  test('displayNotificationDrawer action creator returns the correct action object', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
  
    const action = displayNotificationDrawer();
  
    expect(action).toEqual(expectedAction);
  });
  
  // Test for hideNotificationDrawer action creator
  test('hideNotificationDrawer action creator returns the correct action object', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
  
    const action = hideNotificationDrawer();
  
    expect(action).toEqual(expectedAction);
  });
  