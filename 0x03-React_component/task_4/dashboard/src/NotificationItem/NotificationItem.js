import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = (props) => {
  const { type, html, value, id, markAsRead } = props;

  const className = type === "urgent" ? "urgent-notification" : "default-notification";

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
  id: PropTypes.number, // Add id property
  markAsRead: PropTypes.func, // Add markAsRead property
};

export default NotificationItem;
