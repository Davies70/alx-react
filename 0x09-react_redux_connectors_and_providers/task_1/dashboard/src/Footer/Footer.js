import React, { useContext } from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { AppContext } from '../App/AppContext';

function Footer() {
  const { user, logOut } = useContext(AppContext);
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
}
export default Footer;
