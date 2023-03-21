import { fromJS } from 'immutable';

const getImmutableObject = (object) => {
  const immutableObject = fromJS(object);
  return immutableObject;
};

getImmutableObject(object);
