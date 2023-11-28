// src/reducers/courseReducer.test.js
import courseReducer from '../reducers/courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// Test suite for courseReducer
describe('courseReducer', () => {
  // Test for the default state
  it('should return the default state (empty array)', () => {
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  // Test for FETCH_COURSE_SUCCESS
  it('should return the data passed with isSelected set to false for every item', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    const newState = courseReducer(undefined, action);
    expect(newState).toEqual([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
  });

  // Test for SELECT_COURSE
  it('should return the data with the right item updated (isSelected set to true)', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = { type: SELECT_COURSE, payload: { index: 2 } };
    const newState = courseReducer(initialState, action);
    expect(newState).toEqual([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
  });

  // Test for UNSELECT_COURSE
  it('should return the data with the right item updated (isSelected set to false)', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = { type: UNSELECT_COURSE, payload: { index: 2 } };
    const newState = courseReducer(initialState, action);
    expect(newState).toEqual([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
  });

});
