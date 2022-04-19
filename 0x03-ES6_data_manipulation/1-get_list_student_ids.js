export default function getListStudentIds(stutends) {
  if (!Array.isArray(stutends)) {
    return [];
  }
  return stutends.map((student) => student.id);
}
