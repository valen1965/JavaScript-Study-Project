// OBJECTS 11 - Private Properties and methods. 

// Fundamental Principles of OOP are
// Hide the Details
// Show the essentials

// Constructor function

function Circle(radius) {
  this.radius = radius;
  
  // to hide defaultlocation we set it
  // to local variable instead of 'this'property.

   let defaultLocation = { x: 0, y: 0 };
  //this.dafaultLocation = { x: 0, y: 0 };


  // to hide method we convert it to private method.

  let computeOptimumLocation = function(factor) {
    //...
  } 
  // this.computeOptimumLocation = function(factor) {
  //   //...
  // } 

  this.draw = function() {
    //this.computeOptimumLocation(0.1);
    computeOptimumLocation(0.1);
    // defaultLocation
    // this.radius

    console.log('draw & draw');
  };
}


const circle = new Circle(10);
circle.draw();
