import { ist, Map, fromJS } from 'immutable';

/*
     Create a function named mergeDeeplyElements
*/

export function mergeDeeplyElements(page1, page2) {
    const mergedObject = Map(fromJS(page1)).mergeDeep(Map(fromJS(page2)));
  
    return List([mergedObject]);
}
