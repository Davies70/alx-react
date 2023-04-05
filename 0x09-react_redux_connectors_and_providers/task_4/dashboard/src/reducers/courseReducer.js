import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
const { Map } = require('immutable');

export const initialState = Map([]);

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const courseData = action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));
      const normalizedData = coursesNormalizer(courseData);
      return state.merge(normalizedData);
    }
    case SELECT_COURSE: {
      return state.setIn(
        ['entities', 'courses', action.index.toString(), 'isSelected'],
        true
      );
    }
    case UNSELECT_COURSE: {
      return state.setIn(
        ['entities', 'courses', action.index.toString(), 'isSelected'],
        false
      );
    }
    default: {
      return state;
    }
  }
}
