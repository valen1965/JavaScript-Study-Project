//Implementation Details.
const _radius = new WeakMap();

// Public interface 
export class Circle {
constructor(radius) {
  _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius' + ' ' + _radius.get(this));
  }
}