import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  let value;
  try {
    value = Map(object).getIn(array);
  } catch (e) {}
  return value;
}
