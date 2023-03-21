#!/usr/bin/node

import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const value = Map(object).getIn(array);
  if (
    typeof value === 'string' ||
    typeof value === 'undefined' ||
    value instanceof Map
  ) {
    return value;
  }
  return;
}
