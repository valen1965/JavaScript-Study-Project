
// Chapter OBJECTS
// 6 - Functions are Objects;

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

// const Circle1 = new Function('radius', ` 
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
// }  
// `);
// const circle = new Circle1(1);

Circle.call({}, 1)  // it is ssame expression like in line 22
Circle.apply({}, [1])

const another = new Circle(1);