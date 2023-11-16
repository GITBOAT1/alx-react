import { Map } from 'immutable';

/* Create & export a constant named map. It should create an 
    Immutable Map with the following object:
*/

// Create an Immutable Map with the initial values
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create map2 by modifying values in map
export const map2 = map
  .set(2, 'Benjamin') 
  .set(4, 'Oliver'); 
