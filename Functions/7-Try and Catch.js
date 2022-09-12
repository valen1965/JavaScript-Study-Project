// Functions - 7 - Try and Catch.  
const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  set fullName(value) {
    if (typeof value !== 'string') 
      throw new Error('Value is not a string');

    const parts = value.split(' ');
    if(parts.length !== 2)
      throw new Error('Enter a first and last name.')

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = '';
}
catch(e) {
  alert(e);   // very poor way to display errors
}

console.log(person);
