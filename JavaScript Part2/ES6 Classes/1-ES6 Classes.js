
// 1 - ES6 Classes

// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function() {
//     console.log('draw');
//   }
// }

class Circle {
  constructor(radius) {
    this.radius = radius;
    
    this.move = function() {
    }
  }

  draw() {
    console.log('class-draw');
  }
}

const c = new Circle(5);