// Exercise - Even and Odd numbers.

showNumbers(9)

// option 1

// function showNumbers(limit){
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 === 0) console.log(i, 'EVEN');
//         else console.log(i, 'ODD');
//     }    
// }

// option 2 - cleaner code

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++){
        const message = (i % 2 === 0) ? 'EVEN': 'ODD';
        console.log(i, message);
    }  
}