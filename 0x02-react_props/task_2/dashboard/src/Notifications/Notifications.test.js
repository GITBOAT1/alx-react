import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import Notifications from './Notifications';
import NotificationItem from '../NotificationItem/NotificationItem';

Enzyme.configure({ adapter: new Adapter() });

describe('Notifications', () => {
  it('should render without crashing', () => {
    shallow(<Notifications />);
  });

  it('should render three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it('should render the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });

  it('should render the correct HTML in the first NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    const htmlContent = firstNotificationItem.props().html;

    expect(htmlContent).toEqual({ __html: "<strong>Urgent requirement</strong> - complete by EOD"});
  });
});
