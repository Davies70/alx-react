import { rootReducer } from './rootReducer';
import { combineReducers } from 'redux';
import { Map } from 'immutable';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };

    const reducer = combineReducers(rootReducer);
    const state = reducer(undefined, { type: 'FAKETYPE' });
    for (const st in expectedState) {
      expect(state[st]).toBeTruthy();
      expect(typeof expectedState[st]).toEqual(typeof state[st]);
    }
  });
});
