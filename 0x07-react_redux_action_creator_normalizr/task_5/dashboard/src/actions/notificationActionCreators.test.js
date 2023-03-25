import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';

describe('notificationActionCreators', () => {
  test('verifies that markAsRead action creator works', () => {
    const index = 1;
    const expectedMarkAsReadAction = {
      type: MARK_AS_READ,
      index: 1,
    };
    expect(markAsAread(index)).toEqual(expectedMarkAsReadAction);
  });
  test('verifies that setNotificationFilter action creator works', () => {
    const expectedSetNotificationFilterAction = {
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    };
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(
      expectedSetNotificationFilterAction
    );
  });
});
