
// 15 - Excercise 2 - Factory and Constructor Function.

// let address = createAddress('sivash', 'kherson', 73000);
// console.log(address);
// // Factory Function
// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }

//Constructor Function
function Address (street, city, zipCode){
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
const address = new Address('a', 'b', 'c');
console.log(address);