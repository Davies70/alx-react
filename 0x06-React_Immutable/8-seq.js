import { Seq } from 'immutable';

// const { Seq } = require('immutable');

function printBestStudents(object) {
  const lazySeq = Seq(object);
  const filteredgrades = lazySeq.filter((grade) => grade.score > 70);
  const transformedGrades = filteredgrades.map((grade) => {
    return {
      ...grade,
      firstName: grade.firstName[0].toUpperCase() + grade.firstName.slice(1),
      lastName: grade.lastName[0].toUpperCase() + grade.lastName.slice(1),
    };
  });
  console.log(transformedGrades.toObject());
}
