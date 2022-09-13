// OBJECTS 6 - Functions are Objects.  

// Constructor function
function Circle(radiusValue) {
  this.radius = radiusValue;
  this.draw = function() {
    console.log('draw & draw');
  }
}

// method call
Circle.call({}, 1, 2, 3);  // it is the same expression like on line 13.

//when we use 'new' operator this 'new' operator will internally create empty object and pass them as the first arguments to the 'call' method. And this object will determine
//content for 'this'. 'So, 'this' will reference the object in 'call' method.

// method apply
Circle.apply({}, [1, 2, 3]); // difference with call method is that arguments are passed as an array.


const another = new Circle(1);
console.log(another);


// When we declare a function, internally it is represented like below:
// const circle1 = new Function('radiusValue', `
// this.radius = radiusValue;
// this.draw = function() {
//   console.log('draw & draw');
// }   
// ` )

// const circle = new circle1(5);
// console.log(circle);

// when we declare a function using this syntax, javascript will internally use  function constructor to create this Object.

// Take Away
// In javascript Functions are Objects.