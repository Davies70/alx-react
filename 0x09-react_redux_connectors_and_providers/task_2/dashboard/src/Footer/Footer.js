import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFooterCopy, getFullYear } from '../utils/utils';

export function Footer({ user }) {
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

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};
export default connect(mapStateToProps)(Footer);
