#!/usr/bin/node

const { fromJS } = require('immutable');

const getImmutableObject = (object) => {
  const object = fromJS(object);
  return object;
};

const object = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

console.log(getImmutableObject(object));
