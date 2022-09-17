
const circle = {
  radius: 2,
  get area() {
    return (Math.PI * this.radius * this.radius).toFixed(3);
  } 
}; 

circle.radius = 10;
circle.area = 5;

console.log(circle.area, 'm');