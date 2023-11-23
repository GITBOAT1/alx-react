import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from '../NotificationItem/NotificationItem';

// Animation keyframes for opacity change
const opacityChange = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

// Animation keyframes for bouncing effect
const bounce = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false, // Ensure it's initially set to false
    };
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    // Compare the length of the current listNotifications with the next listNotifications
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;
    const isDrawerOpen = displayDrawer;

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
      menuItem: {
        position: 'fixed',
        backgroundColor: '#fff8f8',
        right: '10px',
        cursor: 'pointer',
        zIndex: 1, // Ensure it's above other elements

        // Animation for opacity change
        animationName: opacityChange,
        animationDuration: '1s',
        animationIterationCount: 3,
        animationTimingFunction: 'ease-in-out',

        // Animation for bouncing effect
        animationName: bounce,
        animationDuration: '0.5s',
        animationIterationCount: 3,
        animationTimingFunction: 'ease-in-out',
        '@media (hover: hover)': {
          ':hover': {
            animationName: opacityChange,
            animationDuration: '1s',
            animationIterationCount: 3,
            animationTimingFunction: 'ease-in-out',
          },
        },
      },

      // close button
      closeButton: {
        width: '20px',
        height: '20px',
        color: '#000',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: '20px',
        cursor: 'pointer',
      },
      closeButtonHover: {
        ':hover': {
          backgroundColor: '#cc0000',
        },
      },

      // Separate key for menuItem styles
      menuStyle: {
        display: isDrawerOpen ? 'none' : 'block',
        float: 'right',
      },
    });

    return (
      <div>
        <div
          className={css(styles.menuItem, styles.menuStyle)}
          onClick={() => {
            handleDisplayDrawer();
            console.log('Handle Display Drawer');
          }}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{ float: 'right' }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <div
                className={css(styles.closeButton, styles.closeButtonHover)}
                alt="Close"
              >
                {' '}
                x{' '}
              </div>
            </button>

            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
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

// Define defaultProps and propTypes outside of the component
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

export default Notifications;
