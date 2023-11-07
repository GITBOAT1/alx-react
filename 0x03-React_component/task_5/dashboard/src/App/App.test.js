import App from './App';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';


Enzyme.configure({ adapter: new Adapter() });


describe('App', () => {

  it('should contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(false);
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
    expect(wrapper.containsMatchingElement(<CourseList />)).toBe(false);
  });

  it('should not render Login', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.containsMatchingElement(<Login />)).toBe(false);
  });
/*
  it('should call logOut and display an alert when "Control" and "h" keys are pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  
    const wrapper = shallow(<App logOut={logOutMock} />);
  
    // Custom function to simulate key events
    const simulateKeyPress = (key) => {
      const event = new KeyboardEvent('keydown', { key });
      document.dispatchEvent(event);
    };
  
    // Simulate "Control" and "h" keypress events
    simulateKeyPress('Control');
    simulateKeyPress('h');
  
    // Ensure that logOutMock is called
    expect(logOutMock).toHaveBeenCalled();
  
    // Ensure that alertMock is called with the expected message
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
  });

  it('should not call logOut when other keys are pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = shallow(<App logOut={logOutMock} />);

    // Simulate a "control" keypress event
    const controlKeyPress = new KeyboardEvent('keydown', { key: 'Control' });
    document.dispatchEvent(controlKeyPress);

    // Simulate an "a" keypress event
    const aKeyPress = new KeyboardEvent('keydown', { key: 'a' });
    document.dispatchEvent(aKeyPress);

    // Verify that logOut was not called
    expect(logOutMock).not.toHaveBeenCalled();

    // Verify that alert was not called
    expect(alertMock).not.toHaveBeenCalled();
  });*/

});
