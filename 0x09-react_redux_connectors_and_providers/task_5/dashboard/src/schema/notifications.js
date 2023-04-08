const { schema, normalize } = require('normalizr');
const notificationsData = require('../../dist/notifications.json');

export default function getAllNotificationsByUser(userId) {
  const notifications = Object.values(normalizedData.entities.notifications);
  const messages = normalizedData.entities.messages;
  const notification = notifications
    .filter((data) => {
      return data.author === userId;
    })
    .map((data) => {
      return messages[data.context];
    });
  return notification;
}

const user = new schema.Entity('user');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedData = normalize(notificationsData, [notification]);

export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}
