// reducers/uiReducer.test.js
import uiReducer from '../reducers/uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

// Test suite for uiReducer
describe('uiReducer', () => {
  // Test for the initial state when no action is passed
  it('should return the initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const newState = uiReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  // Test for the initial state when the action SELECT_COURSE is passed
  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const newState = uiReducer(initialState, { type: 'SELECT_COURSE' });
    expect(newState).toEqual(initialState);
  });

  // Test for changing the isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER is passed
  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, action);

    expect(newState.isNotificationDrawerVisible).toEqual(true);
    // Ensure other properties remain unchanged
    expect(newState.isUserLoggedIn).toEqual(false);
    expect(newState.user).toEqual({});
  });

  // Add more tests for other action types if needed
});
