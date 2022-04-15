export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value === 'string') {
      return (this._name = value);
    }
    throw new TypeError('Name must be a string');
  }

  get length() {
    return this._length;
  }
  set length(value) {
    if (typeof value === 'number') {
      return (this._length = value);
    }
    throw new TypeError('Length must be a number');
  }

  get students() {
    return this._students;
  }
  set students(value) {
    if (
      Array.isArray(value) &&
      value.every((student) => typeof student === 'string')
    ) {
      return (this._students = value);
    }
    throw new TypeError('Students must be an array of strings');
  }
}
