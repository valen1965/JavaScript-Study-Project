
// 4 - The This Keyword
// enabling strict mode

// 'use strict';

// const Circle = function() {
//   this.draw = function() {
//     console.log(this);
//   }
// }

// const circle = new Circle();
// // Method call  - 'this' points to circle object
// circle.draw();

// const draw = circle.draw;
// // Function call - we are calling standalone function which is not part of an object. 
// //'this' will point to the global object, which is window object in the browser and global in node.js..  

// draw();


// body of the classes are executed in strict mode, preventing from accidentally modifying the global object.
class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
draw();