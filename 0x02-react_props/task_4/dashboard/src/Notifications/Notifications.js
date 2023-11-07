import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from '../NotificationItem/NotificationItem';
import './Notifications.css'

const Notifications = (props) => {
  const { displayDrawer } = props;
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications ">
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div>
        <button
          style={{ float: 'right' }}
          aria-label="Close"
          onClick={handleClick}
        >
        <img className="close" src={closeIcon} alt="Close" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
        </ul>
        </div>
         )}
    </div>
  );
  }
  
  Notifications.defaultProps = {
    displayDrawer: false,
  };
  
  export default Notifications;
  