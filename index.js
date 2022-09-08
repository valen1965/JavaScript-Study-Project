
//FUNCTIONS - Excercise 2 - Area of Circle.

const circle = {
   
  set newRadius(value) {
    this.radius = value;
  },
  get area() {
   return (Math.PI * this.radius * this.radius).toFixed(3);

 }
};


circle.newRadius = 5.4;
console.log(circle.area);
