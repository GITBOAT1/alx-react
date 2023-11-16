// 0-fromjs.js
const { Map, fromJS } = require('immutable');

function getImmutableObject(object) {
  // Use fromJS to convert the JavaScript object to an Immutable Map
  const immutableMap = fromJS(object);
  return immutableMap;
}

export default getImmutableObject;
