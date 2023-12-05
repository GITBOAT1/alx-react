// src/selectors/notificationSelector.js
import { createSelector } from 'reselect';

// Select the notifications reducer state
const selectNotificationsState = (state) => state.notifications;

// Create a selector for the filter type
export const filterTypeSelected = createSelector(
  [selectNotificationsState],
  (notifications) => notifications.get('filter')
);

// Create a selector for all notifications
export const getNotifications = createSelector(
  [selectNotificationsState],
  (notifications) => notifications.get('notifications')
);

// Create a selector for unread notifications
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter((notification) => !notification.get('isRead'))
);
