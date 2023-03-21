import { Map } from 'immutable';
const object = {
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
};
export const map = Map(object);
export const map2 = map.set([2, 4], ['Benjamin', 'Oliver']);
