import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';

function Notifications() {
  const buttonStyles = {
    color: '#3a3a3a',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    position: 'absolute',
    right: '3px',
    top: '3px',
    cursor: 'pointer',
    outline: 'none',
  };

  return (
    <div className="Notifications">
      <button
        style={buttonStyles}
        aria-label="Close"
        onClick={(e) => {
          console.log('Close button has been clicked');
        }}
      >
        <img src={closeIcon} alt="close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">
          New course available
        </li>
        <li data="urgent">
          New resume available
        </li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{__html: getLatestNotification()}}
        />
      </ul>
    </div>
  );
}


export default Notifications;
