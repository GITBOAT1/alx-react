// actions/courseActionCreators.test.js
import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Test for selectCourse action creator
test('selectCourse action creator returns the correct action object', () => {
  const index = 1;
  const expectedAction = {
    type: SELECT_COURSE,
    payload: { index },
  };

  const action = selectCourse(index);

  expect(action).toEqual(expectedAction);
});

// Test for unSelectCourse action creator
test('unSelectCourse action creator returns the correct action object', () => {
  const index = 1;
  const expectedAction = {
    type: UNSELECT_COURSE,
    payload: { index },
  };

  const action = unSelectCourse(index);

  expect(action).toEqual(expectedAction);
});
