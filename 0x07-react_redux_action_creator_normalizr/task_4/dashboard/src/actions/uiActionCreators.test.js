import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

describe('uiActionCreator', () => {
  test('verifies login action creator works', () => {
    const expectedLoginAction = {
      type: LOGIN,
      user: { email: 'email', password: 'password' },
    };
    const password = 'password';
    const email = 'email';
    expect(login(email, password)).toEqual(expectedLoginAction);
  });
  test('verifies logout action creator works', () => {
    const expectedLogoutAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedLogoutAction);
  });
  test('verifies displayNotificationDrawer action creator works', () => {
    const expectedDisplayNotificationDrawerAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(
      expectedDisplayNotificationDrawerAction
    );
  });
  test('verifies hideNotificationDrawer action creator works', () => {
    const expectedHideNotificationDrawerAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(
      expectedHideNotificationDrawerAction
    );
  });
});
