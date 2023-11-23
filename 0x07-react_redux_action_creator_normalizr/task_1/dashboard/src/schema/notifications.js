import * as jdata from '../notifications.json'
import { schema } from 'normalizr';


export default function getAllNotificationsByUser (userId) {
    return jdata.default.filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

// Define user entity
const user = new schema.Entity('users');

// Define message entity
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export { user, message, notification };