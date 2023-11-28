// src/schema/courses.js
import { schema } from 'normalizr';
import { normalize } from 'normalizr';


// Define course schema
const courseSchema = new schema.Entity('courses');

export const coursesNormalizer = (data) => {
    const coursesSchema = [courseSchema];
    return normalize(data, coursesSchema);
  };
export default courseSchema;

