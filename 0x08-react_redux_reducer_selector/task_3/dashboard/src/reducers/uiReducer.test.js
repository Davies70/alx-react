import { uiReducer, initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseActionTypes';

describe('uiReducer', () => {
  test('verifies state returned equals initial state when no action is passed', () => {
    const state = uiReducer(initialState);
    expect(state).toEqual(initialState);
  });
  test('verifies state returned equals initial state when action SELECT_COURSE is passed', () => {
    const state = uiReducer(initialState, SELECT_COURSE);
    expect(state).toEqual(initialState);
  });
  test('state returned with action DISPLAY_NOTIFICATION_DRAWER alters its isNotificationDrawerVisible property', () => {
    const state = uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER);
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });
});
