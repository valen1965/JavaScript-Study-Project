
// Functions  08 - Local vs Global Scope.

const color = 'red';
function start() {
  const message = 'hi';
  const color = 'blue';
  console.log(color);
}

function stop() {
  const message = 'bye';
}

start();
