import { fromJS } from 'immutable';

const getImmutableObject = (obj) => {
  const immutableObject = fromJS(obj);
  return immutableObject;
};
