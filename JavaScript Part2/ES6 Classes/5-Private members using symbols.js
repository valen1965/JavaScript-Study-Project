
// 5 - Private members using symbols


const _radius = Symbol();
const _draw = Symbol();
class Circle {
  constructor(radius) {
    /*this.radius = radius;
    this['radius'] = radius;*/
    this[_radius] = radius;
  }

  [_draw]() {

  }
}

// this.radius property is public by default

const c = new Circle(1);
c.radius;

// implementing Private property for radius to hide it from a user.

// 1st Approach is using underscore as naming convention.

// 2nd Approach - use odf Symbols




