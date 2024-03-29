import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

const fetch = require('node-fetch');

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}


export function logout() {
  return {
    type: LOGOUT,
  };
}



export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}



export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}


export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function loginRequest(email, password) {
  return function (dispatch) {
    // the function dispatches the login action defined above
    dispatch(login(email, password));

    // then it returns the fetch action
    return (
      // running an async request to our own API at endpoint /login-success.json
      fetch('/login-success.json')
        // On completion, dispatch the loginSuccess action
        // tells our redux store that we succeeded in doing what we wanted to
        .then(() => dispatch(loginSuccess()))

        // On failure, dispatch the loginFailure action instead
        .catch(() => dispatch(loginFailure()))
    );
  };
}
