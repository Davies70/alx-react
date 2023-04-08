import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
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

export function setLoadingState(loading) {
  return {
    type: SET_LOADING_STATE,
    loading,
  };
}

export function setNotifications(data) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
  };
}

export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch(`/dist/notifications.json`)
      .then((response) => response.json())
      .then((data) => dispatch(setNotifications(data)))
      .catch((error) => {})
      .finally(() => dispatch(setLoadingState(false)));
  };
}
