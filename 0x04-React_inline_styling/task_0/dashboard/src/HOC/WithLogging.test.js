import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

// Mock console.log for the tests
const originalConsoleLog = console.log;
console.log = jest.fn();

afterAll(() => {
  // Restore the original console.log function after all tests
  console.log = originalConsoleLog;
});

describe('WithLogging', () => {
  it('should log when wrapped element is pure HTML', () => {
    const WrappedComponent = WithLogging(() => <p>Hello, World!</p>);
    const wrapper = shallow(<WrappedComponent />);
    
    // Check if console.log was called on mount
    expect(console.log).toHaveBeenCalledWith('Component is mounted');

    // Unmount the component
    wrapper.unmount();

    // Check if console.log was called on unmount
    expect(console.log).toHaveBeenCalledWith('Component is going to unmount');
  });

  it('should log with component name when wrapped element is Login component', () => {
    const Login = () => <p>Login Component</p>;
    const WrappedLogin = WithLogging(Login);

    const wrapper = shallow(<WrappedLogin />);
    
    // Check if console.log was called on mount with the component name
    expect(console.log).toHaveBeenCalledWith('Login is mounted');

    // Unmount the component
    wrapper.unmount();

    // Check if console.log was called on unmount with the component name
    expect(console.log).toHaveBeenCalledWith('Login is going to unmount');
  });
});
