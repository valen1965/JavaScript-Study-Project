//PROTOTYPICAL Inheritance 2 - Resetting the Constructor.
function Shape(area) {
  this.area = 5;
} 
Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle(radius) {
  this.radius = 1;
}

// Before this line 
// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor(1) = new Circle(1);

Circle.prototype = Object.create(Shape.prototype);

// as best practice, whener we reset prototype of an object, we should also resent a constructor.
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
} 

const s = new Shape();
const c = new Circle();

