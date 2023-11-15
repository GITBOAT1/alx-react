const {Map} = require('immutable');

export default function getImmutableObject (object){
    const immutableMap = Map(object);
    return immutableMap;
}

// Example usage:
const inputObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
  };
  
  const immutableObject = getImmutableObject(inputObject);
  
  console.log(immutableObject);