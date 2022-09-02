
// Chapter OBJECTS
// 9 - Cloning an object.

const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

// const another = {};
//   for (let key in circle) 
//     another[key] = circle[key];
  
//const another = Object.assign({}, circle); // copies properties or methods from one or more source objects, or combine a few objects into a target object.  

const another = {...circle}; // spread operator is used to clone all properties and methods and put them into another object. 

console.log(another);  

