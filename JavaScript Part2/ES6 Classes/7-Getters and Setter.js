
// 7 - Getters and Setters

// const _radius = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//   }
// }

// const c = new Circle(1);

// method 1 to access raduis private property

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if(value <= 0) throw new Error('Invalid value')
    _radius.set(this, value);
  } 
}

const c = new Circle(1);


