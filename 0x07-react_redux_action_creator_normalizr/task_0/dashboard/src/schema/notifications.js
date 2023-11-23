import * as jdata from '../notifications.json'

export default function getAllNotificationsByUser (userId) {
    return jdata.default.filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}