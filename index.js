
// Chapter OBJECTS
// 1- Basics

// let radius = 1;
// let x =1;
// let y =1;

// Object-oriented Programming (OOP)
//OOP - is basicle style of programming, where we see a programm as a collection
//of objects that talk to each other to perfrom some functionality.

// if a function is a part of an object, we call that function 'a method'

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('draw');
  }
};

circle.draw(); // Method