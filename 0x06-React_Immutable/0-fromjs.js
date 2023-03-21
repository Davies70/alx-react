#!/usr/bin/node

import { fromJS } from 'immutable';

const getImmutableObject = (object) => {
  return fromJS(object);
};

const testObj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

getImmutableObject(testObj);
