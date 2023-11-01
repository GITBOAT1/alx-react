// CourseList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    render(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const { container } = render(<CourseList />);
    expect(container.querySelectorAll('tr').length).toBe(5);
  });
});
