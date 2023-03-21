import React, { useContext } from 'react';
import logo from '../assets/holberton_logo.jpg';
import { css, StyleSheet } from 'aphrodite';
import { AppContext } from '../App/AppContext';

function Header() {
  const { user, logOut } = useContext(AppContext);
  return (
    <>
      <header className={css(headerStyles.appHeader)}>
        <img src={logo} alt="logo" className={css(headerStyles.appLogo)} />
        <h1 className={css(headerStyles.h1)}>School dashboard</h1>
      </header>
      {user.isLoggedIn && (
        <section id="logoutSection">
            Welcome <strong>{user.email}</strong>
            <a href="#" onClick={logOut}>
              <em>(logout)</em>
            </a>
        </section>
      )}
    </>
  );
}
const headerStyles = StyleSheet.create({
  h1: {
    marginLeft: '3rem',
  },

  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#E11D3F',
    borderBottom: '1px solid #E11D3F',
  },

  appLogo: {
    height: '200px',
    width: '200px',
  },
});

export default Header;
