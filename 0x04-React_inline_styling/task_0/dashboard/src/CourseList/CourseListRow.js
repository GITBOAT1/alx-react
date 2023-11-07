import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = (props) => {
  const { isHeader, textFirstCell, textSecondCell } = props;
  
  const headerRowStyle = {
    backgroundColor: '#deb5b545',
  };
  
  const regularRowStyle = {
    backgroundColor: '#f5f5f5ab',
  };

  if (isHeader) {
    if (textFirstCell === null) {
      return (
        <tr style={headerRowStyle}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={headerRowStyle}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={regularRowStyle}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
