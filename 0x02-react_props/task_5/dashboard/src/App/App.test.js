import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should contain the Login component', () => {
    const wrapper = shallow(<App isLoggedIn={false}/>);
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
