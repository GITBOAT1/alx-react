import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  urgentNotification: {
    color: 'red',
    width: '100%', // Take the entire screen width
    borderBottom: '1px solid black', // Black border at the bottom
    padding: '10px 8px', // Padding of 10px top and bottom, 8px left and right
    fontSize: '20px', // Font size of 20px
  },
  defaultNotification: {
    color: 'blue',
    width: '100%', // Take the entire screen width
    borderBottom: '1px solid black', // Black border at the bottom
    padding: '10px 8px', // Padding of 10px top and bottom, 8px left and right
    fontSize: '20px', // Font size of 20px
  },
});

const NotificationItem = (props) => {
  const { type, html, value, id, markAsRead } = props;

  const className = type === "urgent"
    ? css(styles.urgentNotification)
    : css(styles.defaultNotification);

  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <li className={className} onClick={handleClick}>
      {html ? (
        <div dangerouslySetInnerHTML={html} />
      ) : (
        value
      )}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;
