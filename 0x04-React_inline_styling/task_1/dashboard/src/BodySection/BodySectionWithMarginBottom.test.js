import React from 'react';
import { shallow } from 'enzyme'; // Import shallow rendering from your testing library
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  it('should render a BodySection component with the correct props', () => {
    // Define props for BodySectionWithMarginBottom
    const title = 'Test Title';
    const children = <p>Test children</p>;

    // Shallow render the component
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    // Find the rendered BodySection component
    const bodySection = wrapper.find('BodySection');

    // Check if the BodySection component is rendered
    expect(bodySection.exists()).toBe(true);

    // Check if the props are passed correctly
    expect(bodySection.prop('title')).toBe(title);
    expect(bodySection.contains(children)).toBe(true);
  });
});
