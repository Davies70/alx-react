import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
import { fetchNotifications } from '../actions/notificationActionCreators';

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return (
      <>
        {!this.props.displayDrawer ? (
          <div
            className={css(notificationStyles.menuItem)}
            onClick={() => this.props.handleDisplayDrawer()}
          >
            Your notifications
          </div>
        ) : null}
        {this.props.displayDrawer ? (
          <div className={css(notificationStyles.notifications)}>
            <button
              style={{
                color: '#3a3a3a',
                fontWeight: 'bold',
                background: 'none',
                border: 'none',
                fontSize: '15px',
                position: 'absolute',
                right: '3px',
                top: '3px',
                cursor: 'pointer',
                outline: 'none',
              }}
              aria-label="Close"
              className={css(notificationStyles.button)}
              onClick={() => {
                console.log('Close button has been clicked');
                this.props.handleHideDrawer();
              }}
            >
              <img src={closeIcon} alt="close icon" width="15px" />
            </button>
            {this.props.listNotifications.length != 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul>
              {this.props.listNotifications.length == 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
              ) : null}
              {this.props.listNotifications.map((val) => {
                return (
                  <NotificationItem
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={val.id}
                    id={val.id}
                    markAsRead={this.props.markNotificationAsRead}
                  />
                );
              })}
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}
const fadeIn = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const bounce = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '33%': {
    transform: 'translateY(-5px)',
  },
  '66%': {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
};

const notificationStyles = StyleSheet.create({
  notifications: {
    border: '3px dotted #E11D3F',
    padding: '6px 12px',
    position: 'absolute',
    top: '21px',
    right: '7px',
    marginTop: '12px',
    zIndex: '100',
    '@media (max-width: 900px)': {
      padding: '0',
      fontSize: '20px',
      relative: '12px',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      height: '100%',
      width: '100%',
      backgroundColor: '#ffffff',
      boxSizing: 'border-box',
      border: 'none',
    },
  },

  button: {
    'media (max-width: 900px)': {
      position: 'absolute',
      float: 'right',
    },
  },

  menuItem: {
    position: 'relative',
    zIndex: 100,
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    float: 'right',
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  fetchNotifications: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    listNotifications: state.notifications.get('messages'),
  };
};

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
