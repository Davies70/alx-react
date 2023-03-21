const { fromJS } = require('immutable');

const getImmutableObject = (obj) => {
  const immutableObject = fromJS(obj);
  return immutableObject;
};

const object = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

console.log(getImmutableObject(object));
