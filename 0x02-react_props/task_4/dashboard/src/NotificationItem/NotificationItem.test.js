import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import NotificationItem from './NotificationItem';

Enzyme.configure({ adapter: new Adapter() });

describe('NotificationItem', () => {
    it('render component works without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBeTruthy();
    });
    
    it('should render with type and value props', () => {
        const type = 'default';
        const value = 'test';
        const wrapper = shallow(<NotificationItem type={type} value={value} />);
        
        expect(wrapper.text()).toEqual(`test`);
      });
    
      it('should render with an html prop', () => {
        const htmlProp = { __html: '<u>test</u>' };
        const wrapper = shallow(<NotificationItem html={htmlProp} />);
        
        expect(wrapper.html()).toEqual("<li class=\"default-notification\"><div><u>test</u></div></li>");
      });
});
