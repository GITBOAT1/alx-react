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

  it('displays the menu item and hides div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1); // Check for the menu item
    expect(wrapper.find('.Notifications')).toHaveLength(0); // Check that div.Notifications is not displayed
  });

  it('displays the menu item and div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1); // Check for the menu item
    expect(wrapper.find('.Notifications')).toHaveLength(1); // Check that div.Notifications is displayed
  });

  
});
