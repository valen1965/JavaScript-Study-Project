// Exercise - Speed Limit

// Speed Limit = 70
// 5 -> 1 point
// math.floor(1.3)
// 12 pints -> suspended.


const speedLimit = 70;
const kmPerPoint = 5;
const output = checkSpeed(120)

console.log(output)

// function checkSpeed(speed) {
    
//     if (speed < speedLimit + kmPerPoint) {
//         return ('Ok');
//     }
//     else {
//         const points = Math.floor ((speed - speedLimit) / kmPerPoint);
//         if (points >= 12) 
//             return ('License suspended');
//         else
//             return ('Points ' +  points);
//     }
// }  


// making code cleaner

function checkSpeed(speed) {
    
    if (speed < speedLimit + kmPerPoint) {
        return ('Ok');
        return;
    }
    const points = Math.floor ((speed - speedLimit) / kmPerPoint);
    if (points >= 12) 
        return ('License suspended');
    else
        return ('Points ' +  points);
    }
 