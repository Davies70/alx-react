#!/usr/bin/node

import { fromJS } from 'immutable';

const getImmutableObject = (object) => {
  const immutable = fromJS(object);
};

getImmutableObject();
