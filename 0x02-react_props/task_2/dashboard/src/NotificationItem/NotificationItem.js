import React from 'react';


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

export default NotificationItem;