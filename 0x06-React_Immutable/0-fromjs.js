#!/usr/bin/node

import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  fromJS(object);
}
