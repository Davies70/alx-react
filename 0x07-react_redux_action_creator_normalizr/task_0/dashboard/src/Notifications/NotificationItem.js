import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { type } = this.props;
    const style =
      type === 'urgent'
        ? notificationItemstyle.urgent
        : notificationItemstyle.default;
    return this.props.value ? (
      <li
        data-notification-type={this.props.type}
        onClick={() => this.props.markAsRead(this.props.id)}
        className={css(style, notificationItemstyle.li)}
      >
        {this.props.value}
      </li>
    ) : (
      <li
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        onClick={() => this.props.markAsRead(this.props.id)}
        className={css(style, notificationItemstyle.li)}
      ></li>
    );
  }
}

const notificationItemstyle = StyleSheet.create({
  li: {
    '@media (max-width: 900px)': {
      listStyle: 'none',
      borderBottom: '1px solid black',
      padding: '10px 8px',
      margin: 0,
      width: '100%',
      fontSize: '20px',
    },
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0,
};

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;
