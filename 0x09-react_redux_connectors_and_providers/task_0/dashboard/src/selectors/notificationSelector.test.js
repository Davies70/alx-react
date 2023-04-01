import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';
import { notificationReducer } from '../reducers/notificationReducer';
import {
  fetchNotificationSuccess,
  markAsRead,
} from '../actions/notificationActionCreators';
import { MARK_AS_READ } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const { Map } = require('immutable');

const initialState = Map({
  notifications: [],
  filter: 'URGENT',
});

const myNotifications = [
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

const notificationList = [
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
];
const notificationAction = fetchNotificationSuccess(myNotifications);

const state = notificationReducer(initialState, notificationAction);

const markAsReadAction = markAsRead(2);
const readNotificationState = notificationReducer(state, markAsReadAction);

describe('notification selectors', () => {
  it('verifies that filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(state)).toEqual('URGENT');
  });
  it('getNotifications returns a list of the message entities', () => {
    const normalizedNotifications = notificationsNormalizer(notificationList);
    const expectedState = normalizedNotifications.entities.notifications;
    const recievedState = getNotifications(state);
    expect(recievedState.toJS()).toEqual(expectedState);
  });
  it('getUnreadNotifications return a list of the message entities', () => {
    const recievedState = getUnreadNotifications(readNotificationState);
    const expectedState = {
      1: {
        id: 1,
        type: 'default',
        value: 'New course available',
        isRead: false,
      },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    };
    expect(recievedState.toJS()).toEqual(expectedState);
  });
});
