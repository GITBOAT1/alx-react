import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: `${value} ${html.__html}` }}
      />
    );
  }

  return <li data-notification-type={type}>{value}</li>;
};
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }).isRequired,
  value: PropTypes.string.isRequired,
};

export default NotificationItem;
