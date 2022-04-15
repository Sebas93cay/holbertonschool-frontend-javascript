export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(value) {
    this._brand = value;
  }
  get brand() {
    return this._brand;
  }

  set motor(value) {
    this._motor = value;
  }
  get motor() {
    return this._motor;
  }

  set color(value) {
    this._color = value;
  }
  get color() {
    return this._color;
  }

  cloneCar() {
    // const Species = this.constructor[Symbol.species];
    // console.log('Species is', Species);
    // console.log('this.constructor', this.constructor);
    // console.log('the symbol is', Symbol.specie);
    // return new Species(this.brand, this.motor, this.color);

    return new this.constructor(this.brand, this.motor, this.color);
  }
}
