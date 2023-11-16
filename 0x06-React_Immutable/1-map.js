// 1-map.js
const { Map } = require('immutable');

export default function getImmutableObject(object) {
  // Use Map() to convert the JavaScript object to an Immutable Map
  const immutableMap = Map(object);
  return immutableMap;
}

