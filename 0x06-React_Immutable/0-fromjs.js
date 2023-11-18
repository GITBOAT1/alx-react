// 0-fromjs.js
import { Map, fromJS } from 'immutable';

export default function getImmutableObject(object) {
  // Use fromJS to convert the JavaScript object to an Immutable Map
  const immutableMap = fromJS(object);
  return immutableMap;
}
