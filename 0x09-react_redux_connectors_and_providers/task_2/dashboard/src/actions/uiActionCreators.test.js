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
  loginRequest,
  loginSuccess,
  loginFailure,
} from './uiActionCreators';

// import mock redux store for tests
import configureStore from 'redux-mock-store';

// import the thunk redux middleware
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// mockStore() takes an initial state
const store = mockStore({});

// A global user example to compare against
const user = {
  email: 'email@email.com',
  password: 'password',
};
jest.mock('node-fetch', () => require('fetch-mock').sandbox());
const fetchMock = require('node-fetch');

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

describe('loginRequest Action dispatching', () => {
  it('verifies store received LOGIN and LOGIN_SUCCESS', () => {
    //fetchMock is actually a call to the configured fetch-mock instance *named* fetchMock
    fetchMock.get('/login-success.json', 200);

    // Return a dispatch to the store
    return store.dispatch(loginRequest(user.email, user.password)).then(() => {
      // store the store's recorded actions
      const actions = store.getActions();
      // expect them to be login and login success
      expect(actions).toEqual([
        login(user.email, user.password),
        loginSuccess(),
      ]);
      // clear the store's actions
      store.clearActions();
    });
  });

  it('verifies store received LOGIN and LOGIN_FAILURE', () => {
    fetchMock.get(
      // matcher
      '/login-success.json',
      // response
      { throws: new Error('fetch failed') },
      // options
      // overwriteRoutes overwrites the logic given to this endpoint
      // Here, I want the response to throw a specific error for this test.
      { overwriteRoutes: true }
    );
    return store.dispatch(loginRequest(user.email, user.password)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([
        login(user.email, user.password),
        loginFailure(),
      ]);
      store.clearActions();
    });
  });
});
