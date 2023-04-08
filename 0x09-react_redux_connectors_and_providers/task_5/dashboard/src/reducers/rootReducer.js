import { uiReducer, initialState as reducerState } from '../reducers/uiReducer';
import {
  courseReducer,
  initialState as courseState,
} from '../reducers/courseReducer';
import {
  notificationReducer,
  initialState as notificationState,
} from '../reducers/notificationReducer';

export const rootReducer = {
  ui: uiReducer,
  courses: courseReducer,
  notifications: notificationReducer,
};

export const initialState = {
  courses: courseState,
  ui: reducerState,
  notifications: notificationState,
};
