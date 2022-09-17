// ES module

/Implementation Details.
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

// Imported module

import {Circle} from './circle2.js';

const c = new Circle(5);
c.draw();


