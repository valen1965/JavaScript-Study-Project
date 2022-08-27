
// for
// while
// do while

//for-in
const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person)
    console.log(key, person[key]);
    
    // for-of loop
const colors = ['red', 'green', 'blue'];
for(let color of colors)
    console.log(color);