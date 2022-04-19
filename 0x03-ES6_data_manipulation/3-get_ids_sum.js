export default function getStudentIdSum(students) {
  return students.reduce((acum, { id }) => acum + id, 0);
}
