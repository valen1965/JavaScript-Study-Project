
// 6 - Private members using WeakMaps
const _radius = new WeakMap();
const _move = new WeakMap();
// WeakMap is dictionary where keys are objects
// if no references to these keys they will be garbage collected.


class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    
    _move.set(this, () => {
      console.log('move', this);
    });
  }

  draw() {
    //console.log(_radius.get(this));
    _move.get(this)();
    console.log('draw');
  }
}

const c = new Circle(1);


