//PROTOTYPICAL Inheritance 1 - Creating Your Own Prototypical Inheritance:


function Shape(area) {
  this.area = 5;
} 
Shape.prototype.duplicate = function() {
  console.log('duplicate');
}


function Circle(radius) {
  this.radius = 1;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  console.log('draw');
} 

const s = new Shape();
const c = new Circle();

