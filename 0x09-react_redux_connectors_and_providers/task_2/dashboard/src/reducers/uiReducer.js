import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';

const { Map } = require('immutable');

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', true);
    }
    case HIDE_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', false);
    }
    case LOGIN_SUCCESS: {
      return state.set('isUserLoggedIn', true);
    }
    case LOGIN_FAILURE: {
      return state.set('isUserLoggedIn', false);
    }
    case LOGOUT: {
      return state.set('isUserLoggedIn', false).set('user', null);
    }
    case LOGIN: {
      return state.set('user', action.user);
    }
    default: {
      return state;
    }
  }
}
