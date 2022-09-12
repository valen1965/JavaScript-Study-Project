// Functions - 9 - Let vs Var.  

function start() {
  for (let i = 0; i < 5; i++) {
    if (true) {
      let color = 'red';
    }
  }
  console.log(color);
}

// var => function-scoped 
// ES6 ( ES2015): let, const => bloc-scoped 

start();