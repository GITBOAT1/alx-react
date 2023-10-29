import React from 'react';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';

function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={{ float: 'right' }}
        aria-label="Close"
        onClick={handleClick}
      >
        <img className="close" src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li className='urgent'>
          <NotificationItem
            type="default"
            value="New course available"
            html={undefined} // Provide a default value for the html prop
          />
          </li>
          <li className='default'>
          <NotificationItem
            type="urgent"
            value="New resume available"
            html={undefined} // Provide a default value for the html prop
            className="default"
          />
        </li>
        <li className='urgent'>
        <NotificationItem

          value=''
          html={{ __html: getLatestNotification() }}
        />
        </li>
      </ul>
    </div>
  );
}

export default Notifications;
