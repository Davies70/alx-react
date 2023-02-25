import './Notifications.css';
import React from 'react';
import { getLastNotification } from './utils';

function Notifications() {
    return (
        <div className='Notifications'>
            <button
                style={{ float: "right" }}
                aria-label="Close"
                onClick={console.log('Close button has been clicked')}>
                <img src='./close-icon.png' alt='close-icon'></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ _html: getLastNotification() }}></li>
            </ul>
        </div>);
}
export default Notifications;
