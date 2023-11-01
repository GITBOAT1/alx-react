import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header component', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });

  it('should render the Holberton logo', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').prop('src')).toEqual('mocked-image-path');
  });

  it('should render the "School dashboard" heading', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toEqual('School dashboard');
  });
});
