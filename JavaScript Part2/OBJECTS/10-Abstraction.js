// OBJECTS 10 - Abstraction.  

// Fundamental Principles of OOP
// Hide the Details
// Show the essentials

// Constructor function

function Circle(radius) {
  this.radius = radius;
  
  this.dafaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function(factor) {
    //...
  } 

  this.draw = function() {
    this.computeOptimumLocation(0.1);
    
    console.log('draw & draw');
  };
}

const circle = new Circle(10);
