import * as notificationsData from '../../../../notifications.json' assert { type: 'json' };

// const notificationsData = require('../../../../notifications.json');
const notificationsD = [notificationsData];
console.log(notificationsD);

// function getAllNotificationsByUser(userId) {
//   const context = notificationsD
//     .filter((notification) => {
//       return notification.author.id === userId;
//     })
//     .map((notification) => {
//       return notification.context;
//     });

//   console.log(context);
// }

// const id = '5debd764a7c57c7839d722e9';
// getAllNotificationsByUser(id);
