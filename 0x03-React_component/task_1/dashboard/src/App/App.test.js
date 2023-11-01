import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

// Mocking the alert function
global.alert = jest.fn();

configure({ adapter: new Adapter() });

describe('App component', () => {
  let logOutMock;

  beforeEach(() => {
    logOutMock = jest.fn();
  });

  afterEach(() => {
    global.alert.mockClear();
  });

  test('should call logOut function and display alert when Control + H keys are pressed', () => {
    const wrapper = shallow(<App logOut={logOutMock} />);
    const instance = wrapper.instance();

    instance.handleKeyDown({ key: 'Control', code: 'ControlLeft' });
    instance.handleKeyDown({ key: 'h', code: 'KeyH' });

    expect(global.alert).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
