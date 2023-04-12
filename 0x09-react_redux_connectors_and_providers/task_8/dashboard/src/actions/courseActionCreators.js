import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from './courseActionTypes';
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}
// export const boundSelectCourse = (index) => dispatch(selectCourse(index));
export function unselectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
}
const courseList = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];
// export const boundUnselectCourse = (index) => dispatch(unselectCourse(index));
export function fetchCourseSuccess() {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: courseList,
  };
}
