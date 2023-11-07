import React from 'react';
import { shallow } from 'enzyme'; // Import shallow rendering from your testing library
import BodySection from './BodySection';

describe('BodySection', () => {
  it('should render children and an h2 element', () => {
    // Define the title and children
    const title = 'test title';
    const children = <p>test children node</p>;

    // Shallow render the BodySection component with the title and children
    const wrapper = shallow(<BodySection title={title}>{children}</BodySection>);

    // Find the h2 element and p element
    const h2Element = wrapper.find('h2');
    const pElement = wrapper.find('p');

    // Check if an h2 element is rendered with the provided title
    expect(h2Element.length).toBe(1);
    expect(h2Element.text()).toBe(title);

    // Check if a p element is rendered with the children text
    expect(pElement.length).toBe(1);
    expect(pElement.text()).toBe('test children node');
  });
});
