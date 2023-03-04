import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import propTypes from "prop-types";

function Notifications({ displayDrawer }) {
  const buttonStyles = {
    color: "#3a3a3a",
    fontWeight: "bold",
    background: "none",
    border: "none",
    position: "absolute",
    right: "3px",
    top: "3px",
    cursor: "pointer",
    outline: "none",
  };

  return displayDrawer ? (
    <div className="Notification-menu">
      <div>Your notifications</div>
      <div className="Notifications">
        <button
          style={buttonStyles}
          aria-label="Close"
          onClick={(e) => {
            console.log("Close button has been clicked");
          }}
        >
          <img src={closeIcon} alt="close icon" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem
            type="urgent"
            html={{ __html: getLatestNotification() }}
          />
        </ul>
      </div>
    </div>
  ) : <div class="Notification-menu">Your notifications</div>;
}

Notifications.propTypes = {
  displayDrawer: propTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
