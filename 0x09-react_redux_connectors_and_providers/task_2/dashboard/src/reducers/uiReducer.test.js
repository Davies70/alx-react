import { uiReducer, initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, LOGIN } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseActionTypes';

const user = { email: 'password@password', password: 'password' };

describe('uiReducer', () => {
  test('verifies state returned equals initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });
  test('verifies state returned equals initial state when action SELECT_COURSE is passed', () => {
    const state = uiReducer(initialState, { type: SELECT_COURSE });
    expect(state).toEqual(initialState);
  });
  test('state returned with action DISPLAY_NOTIFICATION_DRAWER alters its isNotificationDrawerVisible property', () => {
    const state = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });
  test('verifies LOGIN action sets the user in state', () => {
    const state = uiReducer(initialState, { type: LOGIN, user: user });
    expect(state.get('user')).toEqual(user);
  });
});
