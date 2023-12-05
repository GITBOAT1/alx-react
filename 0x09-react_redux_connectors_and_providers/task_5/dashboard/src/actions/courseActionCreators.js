// src/reducers/courseReducer.js
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Set isSelected to false for every item in the list
      return action.data.map(course => ({ ...course, isSelected: false }));

    case SELECT_COURSE:
      // Set isSelected to true for the selected course
      return state.map(course =>
        course.id === action.payload.index ? { ...course, isSelected: true } : course
      );

    case UNSELECT_COURSE:
      // Set isSelected to false for the unselected course
      return state.map(course =>
        course.id === action.payload.index ? { ...course, isSelected: false } : course
      );

    // Add other cases for different actions if needed

    default:
      return state;
  }
};

export default courseReducer;
