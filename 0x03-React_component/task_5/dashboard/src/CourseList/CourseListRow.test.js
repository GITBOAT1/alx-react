// CourseListRow.test.js
import React from 'react';
import { render, getByText} from '@testing-library/react';
import CourseListRow from './CourseListRow';

import '@testing-library/jest-dom/extend-expect';


describe('CourseListRow', () => {
  describe('when isHeader is true', () => {
    it('should render one cell with colspan = 2 when textSecondCell does not exist', () => {
      const { getByText, container } = render(<CourseListRow isHeader={true} textFirstCell="Header Cell" />);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const thElement = getByText('Header Cell');
      expect(thElement).toBeInTheDocument();
      expect(thElement.getAttribute('colSpan')).toBe('2');
      // eslint-disable-next-line testing-library/no-container
      expect(container.querySelectorAll('th').length).toBe(1);
    });

    it('should render two cells when textSecondCell is present', () => {
      const { getByText, container } = render(
        <CourseListRow isHeader={true} textFirstCell="First Header Cell" textSecondCell="Second Header Cell" />
      );
      const firstThElement = getByText('First Header Cell');
      const secondThElement = getByText('Second Header Cell');
      expect(firstThElement).toBeInTheDocument();
      expect(secondThElement).toBeInTheDocument();
      expect(container.querySelectorAll('th').length).toBe(2);
    });
  });

  describe('when isHeader is false', () => {
    it('should render two td elements within a tr element', () => {
      const { getByText, container } = render(
        <CourseListRow isHeader={false} textFirstCell="First Data Cell" textSecondCell="Second Data Cell" />
      );
      const firstTdElement = getByText('First Data Cell');
      const secondTdElement = getByText('Second Data Cell');
      expect(firstTdElement).toBeInTheDocument();
      expect(secondTdElement).toBeInTheDocument();
      expect(container.querySelectorAll('tr').length).toBe(1);
      expect(container.querySelectorAll('td').length).toBe(2);
    });
  });
});
