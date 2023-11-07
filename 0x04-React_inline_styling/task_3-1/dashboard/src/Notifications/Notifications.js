import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
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
        padding: '0', // Remove padding
        fontSize: '20px', // Set font size to 20px
        position: 'fixed', // Position to take over the entire screen
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      },
      close: {
        width: '6px',
        height: '4px',
        background: `url(${closeIcon}) 0 0`,
      },
      notificationList: {
        listStyle: 'none',
        padding: '0', // Remove padding from ul
      },
    });

    return (
      <div className={css(styles.notifications)}>
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
            <ul className={css(styles.notificationList)}> {/* Apply styles to the ul */}
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
