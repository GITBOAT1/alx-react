import '../setupTests';
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';

const mockedNotifications = [
    { type: 'default', value: 'Notification 1', html: '__html_1__' },
    { type: 'urgent', value: 'Notification 2', html: '__html_2__' },
    { type: 'urgent', value: 'Notification 3', html: '__html_3__' },
  ];

describe('NotificationItem component', () => {
  it('should render without crashing', () => {
    shallow(<NotificationItem type="" html={{ __html: '' }} value="" />);
  });

  it('should render NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('NotificationItem').length).toEqual(mockedNotifications.length);
  });
  
  it('should render the correct html for the first NotificationItem element', () => {
    const firstNotification = {
      type: 'default',
      html: '__html_1__',
      value: 'New course available',
    };
    const wrapper = shallow(
      <NotificationItem
        type={firstNotification.type}
        html={{ __html: firstNotification.html }}
        value={firstNotification.value}
      />
    );
    const firstNotificationItem = wrapper.find('NotificationItem').at(0);
    expect(firstNotificationItem.prop('type')).toEqual(firstNotification.type);
    expect(firstNotificationItem.prop('html')).toEqual({ __html: firstNotification.html });
    expect(firstNotificationItem.prop('value')).toEqual(firstNotification.value);

   });
  
});
