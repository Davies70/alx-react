import { uiReducer } from '../reducers/uiReducer';
import { courseReducer } from '../reducers/courseReducer';
import { notificationReducer } from '../reducers/notificationReducer';

export const rootReducer = {
  ui: uiReducer,
  courses: courseReducer,
  notifications: notificationReducer,
};
