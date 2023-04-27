// import React from "react";

function EvenNumbers(getEvenNumbersArr) {
   const isEvenNumbers = getEvenNumbersArr.filter(num => num % 2 === 0);
   return isEvenNumbers;
}

export default EvenNumbers;


//COMMENTS:
//I created a new array called "isEvenNumbers" and used the filter method to get the even numbers, as passed by the arrow function, and pushed the even numbers into the array I created. The arrow function is a boolean which takes in an input (num) and ensures that the input meets the required test (divisible by 2 without a remainder), which should return true and pass the value of the number that is even into the isEvenNumbers array, which is returned, containing only the even numbers.