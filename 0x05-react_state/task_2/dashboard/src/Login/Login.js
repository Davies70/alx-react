import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    props.logIn(
      event.target.elements.email.value,
      event.target.elements.password.value
    );
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    setEnableSubmit(email !== '' && password !== '');
  }, [email, password]);

  return (
    <React.Fragment>
      <div className={css(loginStyles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            className={loginStyles.inputs}
            value={email}
            onChange={handleChangeEmail}
          />
          <div className={css(loginStyles.display)}>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              className={loginStyles.inputs}
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <input
            type="submit"
            className={css(loginStyles.button)}
            value="OK"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    </React.Fragment>
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

Login.propTypes = {
  logIn: PropTypes.func,
};

export default Login;
