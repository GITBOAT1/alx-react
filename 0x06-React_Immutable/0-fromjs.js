const {Map, fromJs} = require('immutable');

export default function getImmutableObject (object){
    const immutableMap = fromJs(object);
    return immutableMap;
}