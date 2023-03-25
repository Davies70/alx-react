import { selectCourse, unselectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionsCreators', () => {
  test('verifies selectCourse works', () => {
    const expectedAction = { type: SELECT_COURSE, index: 1 };
    expect(selectCourse(1)).toEqual(expectedAction);
  });
  test('verifies unSelectCourse works', () => {
    const expectedAction = { type: UNSELECT_COURSE, index: 1 };
    expect(unselectCourse(1)).toEqual(expectedAction);
  });
});
