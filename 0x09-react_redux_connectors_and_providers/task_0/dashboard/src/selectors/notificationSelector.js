const { Map } = require('immutable');
import { notificationsNormalizer } from '../schema/notifications';

export function filterTypeSelected(state) {
  return state.get('filter');
}
export function getNotifications(state) {
  return Map(state.getIn(['entities', 'notifications']));
}

export function getUnreadNotifications(state) {
  const notifications = state.getIn(['entities', 'notifications']);
  const unreadNotifications = [];
  for (let id in notifications) {
    if (notifications[id].isRead === false)
      unreadNotifications.push(notifications[id]);
  }
  const normalizedNotifications = notificationsNormalizer(unreadNotifications);
  return Map(normalizedNotifications.entities.notifications);
}
