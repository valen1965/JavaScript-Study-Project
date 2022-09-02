
// Chapter OBJECTS
// 3- Constructor Functions
// Camel Notation : oneTwoThreeFour
//Pascal Notation:  OneTwoThreeFour ( used in Constructor Functions )

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

const myCircle = createCircle(1);

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(1);
