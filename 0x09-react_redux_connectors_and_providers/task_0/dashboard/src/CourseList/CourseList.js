import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
  courseList: {
    listStyle: 'none',
    padding: 0,
  },
});

function CourseList({ listCourses }) {
  return (
    <ul className={css(styles.courseList)}>
      <CourseListRow textFirstCell="Available courses" isHeader={true} />
      <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      {listCourses.length > 0 ? (
        listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
            isHeader={false}
          />
        ))
      ) : (
        <CourseListRow textFirstCell="No course available yet" isHeader={false} />
      )}
    </ul>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
