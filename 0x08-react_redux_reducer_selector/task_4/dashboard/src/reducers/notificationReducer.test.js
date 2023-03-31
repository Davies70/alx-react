import {
  markAsRead,
  setNotificationFilter,
  fetchNotificationSuccess,
} from '../actions/notificationActionCreators';

import { notificationsNormalizer } from '../schema/notifications';

import { notificationReducer } from './notificationReducer';

const { Map } = require('immutable');

const initialState = Map({
  notifications: [],
  filter: '',
});

const notifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available',
  },
  {
    id: 3,
    type: 'urgent',
    value: 'New data available',
  },
];

const notificationList = Map(
  notificationsNormalizer([
    {
      id: 1,
      isRead: false,
      type: 'default',
      value: 'New course available',
    },
    {
      id: 2,
      isRead: false,
      type: 'urgent',
      value: 'New resume available',
    },
    {
      id: 3,
      isRead: false,
      type: 'urgent',
      value: 'New data available',
    },
  ])
);

const testNotificationList = Map(
  notificationsNormalizer([
    {
      id: 1,
      isRead: false,
      type: 'default',
      value: 'New course available',
    },
    {
      id: 2,
      isRead: true,
      type: 'urgent',
      value: 'New resume available',
    },
    {
      id: 3,
      isRead: false,
      type: 'urgent',
      value: 'New data available',
    },
  ])
);

describe('notificationReducer', () => {
  it('returns the correct default state', () => {
    expect(notificationReducer(initialState, {})).toEqual(initialState);
  });
  it('fetchNotificationSuccess action returns the correct data', () => {
    const action = fetchNotificationSuccess(notifications);
    const expectedState = initialState.merge(notificationList);
    const receivedState = notificationReducer(initialState, action);
    expect(receivedState).toEqual(expectedState);
  });
  it('MarkAsRead action returns the correct data', () => {
    const action = markAsRead(2);
    const expectedState = testNotificationList;
    const receivedState = notificationReducer(notificationList, action);
    expect(receivedState).toEqual(expectedState);
  });
  test('setNotification action filter returns the correct data', () => {
    const action = setNotificationFilter('urgent');
    const expected = initialState.set('filter', 'urgent');
    const received = notificationReducer(initialState, action);
    expect(received).toEqual(expected);
  });
});
