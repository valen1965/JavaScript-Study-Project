// 17 - Excercise 1 - Array from Range.
const numbers = arrayFromRange(1, 10);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];   // creating an empty array
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}