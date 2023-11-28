import * as jdata from '../notifications.json';
import { normalize, schema } from 'normalizr';

// Define user entity
const user = new schema.Entity('users');

// Define message entity
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize the data
const normalizedData = normalize(jdata.default, [notification]);

export default function getAllNotificationsByUser(userId) {
  const { entities } = normalizedData;
  const userNotifications = entities.users[userId];

  if (!userNotifications) {
    return [];
  }

  return userNotifications.notifications.map(notificationId => entities.notifications[notificationId].context);
}
