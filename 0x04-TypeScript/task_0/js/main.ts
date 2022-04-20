import createRow from './utils';

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const juan: Student = {
  firstName: 'Juan',
  lastName: 'Carrancho',
  age: 12,
  location: 'Cali',
};
const pedro: Student = {
  firstName: 'Pedro',
  lastName: 'Martinez',
  age: 13,
  location: 'Medellin',
};
const mariano: Student = {
  firstName: 'Mariano',
  lastName: 'Martinez',
  age: 13,
  location: 'Medellin',
};

const studentsList: Array<Student> = [juan, pedro, mariano];

const body: HTMLBodyElement = document.querySelector('body');
const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student) => {
  createRow(table)([student.firstName, student.location]);
});

body.appendChild(table);
