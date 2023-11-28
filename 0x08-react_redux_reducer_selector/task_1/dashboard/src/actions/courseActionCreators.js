// actions/courseActionCreators.js
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';
import * as courseActionTypes from './courseActionTypes';
import * as courseActionCreators from './courseActionCreators';


// Create an object with all action creators
const courseActions = { ...courseActionCreators };

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

// Bind the action creators to the dispatch function
export const boundCourseActionCreators = (dispatch) =>
  bindActionCreators(courseActions, dispatch);