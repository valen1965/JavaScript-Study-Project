
// 15 - Excercise 1 - Address Object.

// street
// city
// zipCode
// showAddress(address)

const address = {
  street: 'alfa',
  city: 'Kherson',
  zipCode: 73000,
};

function showAddress(address) {
  for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);
