import React, { Fragment } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropeTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    // Only update if the new list is longer than the previous one
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    return (
      <Fragment>
        <div className={css(notificationStyles.menuItem)}>
          Your notifications
        </div>
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
              onClick={(e) => {
                console.log('Close button has been clicked');
              }}
              className={css(notificationStyles.button)}
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
                    markAsRead={this.markAsRead}
                    id={val.id}
                  />
                );
              })}
            </ul>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

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
      marginTop: '0',
      marginBottom: '0',
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
    textAlign: 'right',
  },
});

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropeTypes.bool,
  listNotifications: PropeTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
