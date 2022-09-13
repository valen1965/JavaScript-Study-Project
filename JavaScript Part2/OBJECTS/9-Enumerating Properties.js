// OBJECTS 9 - enumerating properties.  
// Constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw & draw');
  }
}
const circle = new Circle(5);
console.log(circle);

for (let key in circle) {
  if(typeof circle[key] !== 'function')
   console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
  console.log('circle has a radius');