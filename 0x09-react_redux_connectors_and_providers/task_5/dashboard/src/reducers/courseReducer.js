// src/reducers/courseReducer.js
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { Map } from 'immutable';

const initialState = Map({
  courses: Map(),
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Normalize the data and merge it with the state
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeIn(['courses'], normalizedData.entities.courses);

    case SELECT_COURSE:
      // Update the value of the item using setIn
      return state.setIn(['courses', action.index, 'isSelected'], true);

    case UNSELECT_COURSE:
      // Update the value of the item using setIn
      return state.setIn(['courses', action.index, 'isSelected'], false);

    // Add other cases for different actions if needed

    default:
      return state;
  }
};

export default courseReducer;
