import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';

export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}
export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export function fetchNotificationSuccess(listOfNotifications) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: listOfNotifications,
  };
}
