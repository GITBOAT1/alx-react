/* In 1-map.js, modify the function getImmutableObject
     using Map from Immutable.js
 */
export default function accessImmutableObject(object, array) {
    let result = object;
  
    for (const key of array) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        // If the path is not valid, return undefined or throw an error based on your requirements
        return undefined;
      }
    }
  
    return result;
  }
