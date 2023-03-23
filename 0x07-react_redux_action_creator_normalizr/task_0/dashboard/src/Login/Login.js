import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <div className={css(loginStyles.appBody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          className={loginStyles.inputs}
        />
        <div className={css(loginStyles.display)}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            className={loginStyles.inputs}
          />
        </div>
        <button className={css(loginStyles.button)}>OK</button>
      </div>
    </>
  );
}

const loginStyles = StyleSheet.create({
  appBody: {
    padding: '36px 24px',
  },

  inputs: {
    margin: '0 16px 0 8px',
  },

  display: {
    display: 'inline-block',
    '@media (max-width: 900px)': {
      display: 'block',
    },
  },
  button: {
    borderColor: 'yellow',
  },
});

export default Login;
