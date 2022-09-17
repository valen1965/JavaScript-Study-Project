//ARRAYS - 14 - Filtering an Array of Objects

// Task: Filter restaurants which are open.

const restaurants = [
  { id: 1, name: 'Fruits', from: 0800, till: 1900 },
  { id: 2, name: 'Vegetables', from: 1000, till: 1400 },
  { id: 3, name: 'Bottle', from: 0800, till: 1400 },
  { id: 4, name: 'Fish', from: 0900, till: 2300 },
]; 


let today = new Date();
let timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log(timeNow);
timeNow = 0800;

const open = restaurants
  .filter(r => timeNow >= r.from && timeNow <= r.till)
  .sort((a) => a.till)
  .reverse()
  .map(r => r.name + ' ' + r.from + ' ' + r.till)
 
 if (open.length === 0) 
    console.log('All restaurants are closed now.')
  else  
    console.log(open); 
 




// let today = new Date();
// let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// console.log(date);