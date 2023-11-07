import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from '../NotificationItem/NotificationItem';
import './Notifications.css';
import PropTypes from 'prop-types';

class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className="Notifications">
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
          <div>
            <button
              style={{ float: 'right' }}
              aria-label="Close"
              onClick={this.handleClick}
            >
              <img className="close" src={closeIcon} alt="Close" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : (
                listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => this.markAsRead(notification.id)}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string.isRequired,
    }),
  })),
};

export default Notifications;
