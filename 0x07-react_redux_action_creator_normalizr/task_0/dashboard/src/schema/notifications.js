const notificationsData = require('../../../../notifications.json');

function getAllNotificationsByUser(userId) {
  const context = notificationsData
    .filter((notification) => {
      return notification.author.id === userId;
    })
    .map((notification) => {
      return notification.context;
    });
  return context;
}
