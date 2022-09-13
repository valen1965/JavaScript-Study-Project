// OBJECTS 3 - Factories.
  
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
circle.draw();