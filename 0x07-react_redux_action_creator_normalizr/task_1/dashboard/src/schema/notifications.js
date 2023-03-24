const { schema, normalize } = require('normalizr');
const notificationsData = require('../../../../notifications.json');

export default function getAllNotificationsByUser(userId) {
  const context = notificationsData
    .filter((notification) => {
      return notification.author.id === userId;
    })
    .map((notification) => {
      return notification.context;
    });
  return context;
}

const user = new schema.Entity('user');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedData = normalize(notificationsData, [notification]);
