// Functions - 8 - Local and Global.  
// function start() {
//   const message = 'hi';  // scope of const & let are accessible in only within a code block.
//   if(true) {
//     const another = 'bye';
//   }
//   for(let i =0; i <= 5; i++) {
//     console.log(i);
//   }
// console.log(another);
// }

// start();

const color = 'red'; // global const

function start() {
  const message = 'hi';
  const color = 'blue';
  console.log(color);  
}

function stop() {
  const message = 'bye';
}

start();
