import * as jdata from '../notifications.json';
import { normalize, schema } from 'normalizr';
import { coursesNormalizer } from './courses'; // Import the course schema and normalizer


// Define user entity
const user = new schema.Entity('users');
// Define notification schema
const notificationSchema = new schema.Entity('notifications', {
  context: {
    author: coursesNormalizer, // Use the courses normalizer for the author field
  },
});

// Define message entity
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize the data
const normalizedData = normalize(jdata.default, [notification]);


// Create a function to normalize notifications data
export const notificationsNormalizer = (data) => {
  const notificationsSchema = [notificationSchema];
  return normalize(data, notificationsSchema);
};

export default function getAllNotificationsByUser(userId) {
  const { entities } = normalizedData;
  const userNotifications = entities.users[userId];

  if (!userNotifications) {
    return [];
  }

  return userNotifications.notifications.map(notificationId => entities.notifications[notificationId].context);
}


