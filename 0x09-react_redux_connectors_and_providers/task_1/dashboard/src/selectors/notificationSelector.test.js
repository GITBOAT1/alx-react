// src/selectors/notificationSelector.test.js
import { Map, List } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

// Mock state for testing
const mockState = Map({
  notifications: Map({
    filter: 'DEFAULT',
    notifications: List([
      Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
      Map({ id: 2, isRead: true, type: 'urgent', value: 'New resume available' }),
      Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' }),
    ]),
  }),
});

// Test filterTypeSelected selector
test('filterTypeSelected selector', () => {
  const result = filterTypeSelected(mockState);
  expect(result).toEqual('DEFAULT');
});

// Test getNotifications selector
test('getNotifications selector', () => {
  const result = getNotifications(mockState);
  const expected = List([
    Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
    Map({ id: 2, isRead: true, type: 'urgent', value: 'New resume available' }),
    Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' }),
  ]);
  expect(result).toEqual(expected);
});

// Test getUnreadNotifications selector
test('getUnreadNotifications selector', () => {
  const result = getUnreadNotifications(mockState);
  const expected = List([
    Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
    Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' }),
  ]);
  expect(result).toEqual(expected);
});
