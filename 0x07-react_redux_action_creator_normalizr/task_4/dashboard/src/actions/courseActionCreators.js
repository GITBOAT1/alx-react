// actions/courseActionCreators.js
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Action creator for selecting a course
export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    payload: { index },
  };
};

// Action creator for unselecting a course
export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    payload: { index },
  };
};
