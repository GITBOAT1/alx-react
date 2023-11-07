import App from './App';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';


Enzyme.configure({ adapter: new Adapter() });


describe('App', () => {
  it('should contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toBe(true);
  });

  it('should contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it('should render Login when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.containsMatchingElement(<Login />)).toBe(true);
    expect(wrapper.containsMatchingElement(<CourseList />)).toBe(false);
  });

  it('should render CourseList', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.containsMatchingElement(<CourseList />)).toBe(true);
  });

  it('should not render Login', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.containsMatchingElement(<Login />)).toBe(false);
  });
});


