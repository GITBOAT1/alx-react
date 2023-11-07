import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'; // Add this import
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from '../NotificationItem/NotificationItem';

class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    // Compare the length of the current listNotifications with the next listNotifications
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    // Define Aphrodite styles
    const styles = StyleSheet.create({
      notifications: {
        borderStyle: 'dotted dashed',
        borderColor: '#f60808',
        padding: '10px',
      },
      defaultNotification: {
        color: 'blue',
      },
      urgentNotification: {
        color: 'red',
      },
      close: {
        width: '6px',
        height: '4px',
        background: `url(${closeIcon}) 0 0`,
      },
    });

    return (
      <div className={css(styles.notifications)}>
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
          <div>
            <button
              style={{ float: 'right' }}
              aria-label="Close"
              onClick={this.handleClick}
            >
              <img className={css(styles.close)} alt="Close" />
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
                    className={css(
                      notification.type === 'urgent'
                        ? styles.urgentNotification
                        : styles.defaultNotification
                    )}
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

// ... (Rest of the component)

export default Notifications;
