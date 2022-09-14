//PROTOTYPICAL Inheritance 6 - Polymorphis.

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle() {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  console.log('duplicate circle');
}  

function Square(area) {
  this.area = area;
}

extend(Square, Shape);
Square.prototype.duplicate = function() {
  console.log('duplicate square object');
}

const shapes = [
  new Circle(10),
  new Square(5)
];

for (let shape of shapes) {
  shape.duplicate();
}