
// 3 - Statisc Method

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

 // Instance method 
  draw() {
 }

 //static method  used to create utiliy functions which are not thight to a particular object.
 
 static parse(str) {
  const radius = JSON.parse(str).radius;
  return new Circle(radius);
 }
}

class Math2 {
  static abs(value) {
    //..
  }
}

Math2.abs();

const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);

