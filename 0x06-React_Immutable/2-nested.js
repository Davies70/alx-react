import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const value = Map(object).getIn(array);

  if (typeof value === 'string') {
    return value;
  } else if (Map.isMap(value)) {
    return value;
  } else if (value === undefined) {
    return undefined;
  }
}
