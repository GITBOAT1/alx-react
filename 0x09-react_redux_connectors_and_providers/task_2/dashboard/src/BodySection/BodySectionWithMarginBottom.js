import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection.js';

// Define your styles using Aphrodite
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px', // Define your desired margin here
  },
});

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
};

export default BodySectionWithMarginBottom;
