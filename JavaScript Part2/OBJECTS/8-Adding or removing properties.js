// OBJECTS 8 - Adding or removing properties.  
// Constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw & draw');
  }
}
const circle = new Circle(5);
console.log(circle);

// user.token = 'asdasdsd';

// Adding properties

//dot notation
circle.location = { x: 1, };

// bracket notation
circle['location'] = { x: 1};

const propertyName = 'location';
circle[propertyName] = { x: 5};

// Deleting properties

delete circle.location;
delete circle['location'];
delete circle[propertyName];