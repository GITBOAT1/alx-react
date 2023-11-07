import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import CourseList from './CourseList';
import Adapter from 'enzyme-adapter-react-16'; 
import NotificationItem from './NotificationItem';
import CourseListRow from './CourseListRow';

Enzyme.configure({ adapter: new Adapter() });

describe('Courselist', () => {
    it('renders CourseList component without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper).toBeTruthy();
    });

    it('should render 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        const rows = wrapper.find(CourseListRow);
        expect(rows.length).toBe(5);
    })
});