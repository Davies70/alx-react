import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { fromJS } from 'immutable';

export const initialState = fromJS({
  notifications: {},
  filter: 'DEFAULT',
  loading: false,
});

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);
      Object.keys(normalizedData.notifications).map((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return state.mergeDeep(normalizedData);
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
    case SET_LOADING_STATE: {
      return state.set('loading', action.loading);
    }
    default: {
      return state;
    }
  }
}
