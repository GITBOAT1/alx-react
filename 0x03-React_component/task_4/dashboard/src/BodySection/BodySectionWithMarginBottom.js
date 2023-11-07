import React from 'react';
import './BodySectionWithMarginBottom.css';
import BodySection from './BodySection.js';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
};

export default BodySectionWithMarginBottom;
