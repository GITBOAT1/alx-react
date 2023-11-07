import React from 'react';
import PropTypes from 'prop-types';


const NotificationItem = (props) => {
    const {type, html, value } = props;
    const className = type === "urgent" ? "urgent-notification" : "default-notification";
    
    return(
        <li className={className}>
            {html ? (
                <div dangerouslySetInnerHTML={html} />
            ) : (
                value
            )}
        </li>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    value: PropTypes.string,
  };
export default NotificationItem;