
// Exercise  - Count Grades
const marks = [80, 80, 50]; 

console.log(calculatedGrade(marks));

// Code writted by me.

// function calculatedGrade(marks){
// let count = 0;
// let sum = 0;  

// for (let i in marks) 
//   count ++; {
// for (let value of marks)
//   sum += value;

// let grade = sum / count;
 
//   if (grade >=0 &&  grade <=59) return 'F';
//   if (grade >=60 &&  grade <=69) return 'D';  
//   else if (grade >=70 &&  grade <=79) return 'C';  
//   else if (grade >=80 &&  grade <=89) return 'B';  
//   else return ('A');  
    
//   }
  
// }  

function calculatedGrade(marks){
  const average = calculateAverage(marks);

  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}
// reusable function for calculating average
function calculateAverage(array) {
  let sum =0;
  for (let value of array)
    sum += value;
  return sum / array.length;
}