const { normalize, schema } = require('normalizr');

export function coursesNormalizer(data) {
  const courses = new schema.Entity('courses');
  const normalizedCourses = normalize(data, [courses]);
  return normalizedCourses;
}
