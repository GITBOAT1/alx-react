// src/reducers/notificationsReducer.js
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

const initialState = {
  filter: 'DEFAULT',
  notifications: [],
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Set isRead to false for every item in the list
      const updatedNotifications = action.data.map(notification => ({
        ...notification,
        isRead: false,
      }));
      return {
        filter: 'DEFAULT', // You can set the default filter here
        notifications: updatedNotifications,
      };

    case MARK_AS_READ:
      const { index } = action;
      const markedAsReadNotifications = state.notifications.map((notification, i) => ({
        ...notification,
        isRead: i === index ? true : notification.isRead,
      }));
      return {
        ...state,
        notifications: markedAsReadNotifications,
      };

    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    // Add other cases for different actions if needed

    default:
      return state;
  }
};

export default notificationsReducer;
