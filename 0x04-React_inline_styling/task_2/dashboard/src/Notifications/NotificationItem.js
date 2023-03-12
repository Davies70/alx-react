import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite";

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { type } = this.props;
    const style =
      type === "urgent"
        ? notificationItemstyle.urgent
        : notificationItemstyle.default;
    return this.props.value ? (
      <li
        data-notification-type={this.props.type}
        onClick={() => this.props.markAsRead(this.props.id)}
        className={css(style)}
      >
        {this.props.value}
      </li>
    ) : (
      <li
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        onClick={() => this.props.markAsRead(this.props.id)}
        className={css(style)}
      ></li>
    );
  }
}

const notificationItemstyle = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
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
