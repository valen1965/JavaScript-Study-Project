// INHERITANCE 4 - Property Description..
let person = { name: 'Mosh'};

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: true,
  configurable: false
});

delete person.name

console.log(person);
