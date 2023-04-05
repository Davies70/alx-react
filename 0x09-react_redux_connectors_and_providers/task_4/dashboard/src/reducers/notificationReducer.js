import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { fromJS } from 'immutable';

export const initialState = fromJS({
  notifications: [],
  filter: 'DEFAULT',
});

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const updatedNotification = action.data.map((notification) => ({
        ...notification,
        isRead: false,
      }));

      const normalizedData = notificationsNormalizer(updatedNotification);
      return state.merge(normalizedData);
    }
    case MARK_AS_READ: {
      return state.setIn(
        ['entities', 'notifications', action.index.toString(), 'isRead'],
        true
      );
    }
    case SET_TYPE_FILTER: {
      return state.set('filter', action.filter);
    }
    default: {
      return state;
    }
  }
}
