// Functions - 6 - Getters and Setters.  
const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
   return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'John Smith';

console.log(person);

// getters used to access properties of an object
// setters used to change or mutate properties of an object