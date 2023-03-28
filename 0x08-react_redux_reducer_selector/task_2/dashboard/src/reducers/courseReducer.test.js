import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { courseReducer, initialState } from './courseReducer';
import {
  selectCourse,
  unselectCourse,
  fetchCourseSuccess,
} from '../actions/courseActionCreators';

describe('courseReducer', () => {
  test('default state returns empty array', () => {
    expect(courseReducer(initialState, {})).toEqual(initialState);
  });
  test('verifies FETCH_COURSE_SUCCESS returns the data passed', () => {
    const action = fetchCourseSuccess();
    const expectedState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
  test('verifies SELECT_COURSE returns data with the right item updated', () => {
    const currentState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const action = selectCourse(2);
    const expectedState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    expect(courseReducer(currentState, action)).toEqual(expectedState);
  });
  test('verifies that UNSELECT_COURSE returns data with the right item updated', () => {
    const currentState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const action = unselectCourse(2);
    const expectedState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    expect(courseReducer(currentState, action)).toEqual(expectedState);
  });
});
