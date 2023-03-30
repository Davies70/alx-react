import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

export const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const updatedNotification = action.data.map((notification) => ({
        ...notification,
        isRead: false,
      }));
      return {
        ...state,
        notifications: updatedNotification,
      };
    }
    case MARK_AS_READ: {
      const updatedNotification = state.notifications.map((notification) =>
        action.index === notification.id ? { ...notification, isRead: true } : notification);
      return {
        ...state,
        notifications: updatedNotification,
      };
    }
    case SET_TYPE_FILTER: {
      return {
        ...state,
        filter: action.filter,
      };
    }
    default: {
      return state;
    }
  }
}
