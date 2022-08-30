
// Exercise  - Count Truthy


const array = [NaN, 11, 9, 2, null, false, ''];

console.log(countTruthy(array));


function countTruthy(array){
    let count =0;
    for (let value of array )
       if (value)
        count++;
    return count;    
    }
    
