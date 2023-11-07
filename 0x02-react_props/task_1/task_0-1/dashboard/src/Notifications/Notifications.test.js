import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import Notifications from './Notifications';

Enzyme.configure({ adapter: new Adapter() });

describe('Notifications', () => {
  it('should render without crashing', () => {
    shallow(<Notifications />);
  });

  it('should render three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('should render the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});
