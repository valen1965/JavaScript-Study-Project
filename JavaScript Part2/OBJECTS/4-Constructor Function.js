// OBJECTS 4 - Constructors.

// Factory function
function createCircle(radiusValue) {
  return {  
    radius: radiusValue,
    draw: function() {
      console.log('draw');
    }
  };
}
const circle = createCircle(1);

// Constructor function
function Circle(radiusValue) {
  this.radius = radiusValue;
  this.draw = function() {
    console.log('draw & draw');
  }
}
const another = new Circle(5);

// when ' new ' operator is used a few things happen:
// 1 - 'new' operator will create empty object {};
// 2 - thet it will set 'this' to point to that object
// 3 - finally it will returt object from the function. Therefore we do not have explicit return statement. It will happen automatically when we use 'new' Operator.

console.log(another);