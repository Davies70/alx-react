#!/usr/bin/node

import { fromJS } from 'immutable';

const getImmutableObject = (object) => {
  return fromJS(object);
};

getImmutableObject();
