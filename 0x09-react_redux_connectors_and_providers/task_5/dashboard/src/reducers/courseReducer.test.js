import { courseReducer } from './courseReducer';
import {
  selectCourse,
  unselectCourse,
  fetchCourseSuccess,
} from '../actions/courseActionCreators';
import { coursesNormalizer } from '../schema/courses';
const { Map } = require('immutable');

const initialState = Map([]);
const courseList = Map(
  coursesNormalizer([
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
  ])
);

const selectedCourseList = Map(
  coursesNormalizer([
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
  ])
);

const courses = [
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

describe('courseReducer', () => {
  test('default state returns empty array', () => {
    expect(courseReducer(initialState, {})).toEqual(initialState);
  });
  test('verifies FETCH_COURSE_SUCCESS returns the data passed', () => {
    const action = fetchCourseSuccess(courses);
    const expectedState = courseList;
    const receivedState = courseReducer(initialState, action);
    expect(receivedState).toEqual(expectedState);
  });
  test('verifies SELECT_COURSE returns data with the right item updated', () => {
    const action = selectCourse(2);
    const expectedState = selectedCourseList;
    const receivedState = courseReducer(courseList, action);
    expect(receivedState).toEqual(expectedState);
  });
  test('verifies that UNSELECT_COURSE returns data with the right item updated', () => {
    const action = unselectCourse(2);
    const expectedState = courseList;
    const receivedState = courseReducer(courseList, action);
    expect(receivedState).toEqual(expectedState);
  });
});
