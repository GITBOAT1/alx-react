import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  urgentNotification: {
    color: 'red',
  },
  defaultNotification: {
    color: 'blue',
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
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

export default NotificationItem;
