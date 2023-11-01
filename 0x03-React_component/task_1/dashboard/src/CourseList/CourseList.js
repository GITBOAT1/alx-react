import React from 'react';
import PropTypes from 'prop-types';

const CourseList = ({ listCourses }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Credit</th>
        </tr>
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <tr>
            <td colSpan="2">No course available yet</td>
          </tr>
        ) : (
          listCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.credit}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

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
