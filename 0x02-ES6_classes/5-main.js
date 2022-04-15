import Building from './5-building.js';

// const b = new Building(100);
// console.log(b);

class TestBuilding extends Building {
  // evacuationWarningMessage() {
  //   console.log('hello warning');
  // }
}

try {
  const amigo = new TestBuilding(200);
  console.log('outside', Object.getOwnPropertyNames(amigo));
  console.log('outside', Object.getOwnPropertySymbols(amigo));
  console.log(typeof amigo.evacuationWarningMessage);
} catch (err) {
  console.log(err);
}
