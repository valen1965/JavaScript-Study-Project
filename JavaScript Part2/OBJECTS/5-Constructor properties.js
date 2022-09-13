// OBJECTS 5 - Constructor properties.
   
// Factory function
// function createCircle(radiusValue) {
//   return {  
//     radius: radiusValue,
//     draw: function() {
//       console.log('draw');
//     }
//   };
// }
// const circle = createCircle(1);
// console.log(circle);

// // Constructor function
// function Circle(radiusValue) {
//   this.radius = radiusValue;
//   this.draw = function() {
//     console.log('draw & draw');
//   }
// }
// const another = new Circle(5);
// console.log(another);

let x = {};
console.log(x);

// javasxript translates like this: let x = new Object();

// take away
// every object has a constructor properties and that references the function it was used to create that object.