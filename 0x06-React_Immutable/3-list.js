/*
  getListObject accepts an array as parameter
  and converts it into an immutable List using
  the Immutable.js library addElementToList accepts
  two arguments: first one is a   
*/
const { List, Set } = require('immutable');


export function getListObject(array) {
    const myList = List(array);
    return myList;
}

export function addElementToList(list, element) {
    const mylis = List(list).insert(length(list), element);
    return mylis
}