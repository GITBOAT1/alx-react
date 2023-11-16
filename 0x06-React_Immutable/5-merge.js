/*
    Create a function named concatElements
    It accepts two arguments page1 and page2. Both are arrays
    It should return a List containing the values of the two pages
*/

import { List, fromJS } from "./node_modules/immutable/dist/immutable";


export function concatElements(page1, page2) {
    return List(page1.concat(page2));
}

export function mergeElements(page1, page2) {
    const mergedObject = { ...page1, ...page2 };
  
    return fromJS(mergedObject);
  }