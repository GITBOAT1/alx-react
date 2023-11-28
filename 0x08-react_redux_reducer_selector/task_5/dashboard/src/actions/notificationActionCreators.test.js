// src/actions/notificationActionCreators.test.js
import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// Import NotificationTypeFilters
import { NotificationTypeFilters } from './notificationActionTypes';

// Test for markAsRead action creator
test('markAsRead action creator returns the correct action object', () => {
  const index = 1;
  const expectedAction = {
    type: MARK_AS_READ,
    index,
  };

  const action = markAsRead(index);

  expect(action).toEqual(expectedAction);
});

// Test for setNotificationFilter action creator
test('setNotificationFilter action creator returns the correct action object', () => {
  const filter = NotificationTypeFilters.DEFAULT;
  const expectedAction = {
    type: SET_TYPE_FILTER,
    filter,
  };

  const action = setNotificationFilter(filter);

  expect(action).toEqual(expectedAction);
});
