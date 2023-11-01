import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('Footer component', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });

  it('should render the copyright text', () => {
    const wrapper = shallow(<Footer />);
    const copyrightText = wrapper.find('p').text();
    expect(copyrightText).toEqual('Copyright 2020 - Holberton School');
  });
});
