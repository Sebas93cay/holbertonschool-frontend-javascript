export default function updateStudentGradeByCity(
  students,
  location,
  newGrades,
) {
  const filteredStudents = students.filter(
    (student) => student.location === location,
  );
  return filteredStudents.map((student) => {
    const grade =
      newGrades.filter((grade) => grade.studentId === student.id)[0] || NaN;
    return { ...student, grade };
  });
}
