import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import CourseListRow from './CourseListRow';
import Adapter from 'enzyme-adapter-react-16'; 
import NotificationItem from '../NotificationItem/NotificationItem';

console.error = jest.fn();
// Mock Aphrodite
jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: styles => styles,
    hairlineWidth: 1,
  },
  css: jest.fn().mockImplementation((...args) => args),
}));

Enzyme.configure({ adapter: new Adapter() });

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={null} />);
    const thElement = wrapper.find('th');
  
    // Check if it's the right th element
    const colSpan = thElement.props().colSpan;
  
    // Expect the colSpan to be '2' since textFirstCell is null
    expect(colSpan).toBe('2');
  });

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header with textSecondCell" textSecondCell="Second Header" />);
    const thElements = wrapper.find('th');
    expect(thElements).toHaveLength(2);
    expect(thElements.at(0).text()).toBe('Header with textSecondCell');
    expect(thElements.at(1).text()).toBe('Second Header');
  });

  it('renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Row" textSecondCell="Second Row" />);
    const trElement = wrapper.find('tr');
    const tdElements = trElement.find('td');
    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toBe('First Row');
    expect(tdElements.at(1).text()).toBe('Second Row');
  });
});
