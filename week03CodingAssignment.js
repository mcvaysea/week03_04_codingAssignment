/////////////////////////////////////////////////////////
//////////////Week 3: Coding Assignment/////////////////
///////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  QUESTION 1:
    1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
        1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
            ▪ Do not use numbers to reference the last element, find it programmatically, 
            ▪ ages[7] – ages[0] is not allowed!

        1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
        1c. Use a loop to iterate through the array and calculate the average age. 
 */

/* 
console.log(`<=== Question 1 ===>`);

const ageArray = [3, 9, 23, 64, 2, 8, 28, 93]; //original array

console.log(ageArray); //output array to console

function subArrayElements() {   // This function subtracts the 1st and last numbers from the array elements list
  let element1 = ageArray.at(0);  // Sets the 1st element to a variable
  let element2 = ageArray.at(ageArray.length - 1);  // Sets last element to variable
  console.log(Math.abs(element1 - element2));  // Sutracts 1st and last array element returns absolute value
}

subArrayElements(ageArray); //function returns absolute value of new 1st - last element

ageArray.push(52);  //push a new number to the existing array

console.log(ageArray);  //console log array to verify push

subArrayElements(ageArray);  // function returns absolute value of new 1st - last element

console.log(`--- average age loop ---`);

// function to get sum total of array numbers
function loopArrayAge() {
  aveAge = 0;
  for (i = 0; i < ageArray.length; i++) {
    total = aveAge += ageArray[i];
  }
  // calculate average of total array numbers
  average = total / ageArray.length;
  // return average number limited to 2 decimal places
  console.log(average.toFixed(2));
}
loopArrayAge(ageArray);
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////======================COME BACK TO THIS ONE======================///////////////////////////////
////////////////////======================COME BACK TO THIS ONE======================///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  Question 2:
Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
    a. Use a loop to iterate through the array and calculate the average number of letters per name. 

    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
 */
/* 
       console.log(`<=== Question 2 ===>`);

const nameArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(nameArray);

// function nameAve(array) {

// }

// let name1 = 'tommy';
// console.log(name1.length);

function 
for (names of nameArray) {
    nameArrayLength = 0;
    nameLength = 0;
    for (i = 0; i < nameArray.length; i++) {
        nameArrayLength += 1;
        nameLength += nameArray.length(names);

    }
    console.log(names);
}


const nameArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

function splitArray() {
    var regex = /[a-zA-Z0-9]/g;
    return nameArray.toString().split(regex);
}

console.log(splitArray(nameArray));
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 3:
How do you access the last element of any array?
*/

/* 
console.log(`<=== Question 3 ===>`);
//create inital content of array
let mixArray = [10, 23, "Pat", 30, "Edith", 46, 50, "bird", "banana"];
console.log(mixArray);

//return last element in current array
console.log(
  `Last element in the array is currently: ${mixArray[mixArray.length - 1]}`
);

//push new element to end of array
mixArray.push("panda");
console.log(mixArray);

//return new last element in updated array
console.log(
  `Last element in the array is now: ${mixArray[mixArray.length - 1]}`
);
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 4:
How do you access the first element of any array?
*/

/* 
console.log(`<=== Question 4 ===>`);
//create inital content of array
let mixedArray = [10, 23, "Pat", 30, "Edith", 46, 50, "bird", "banana"];
console.log(mixedArray);
//return first element in current array
console.log(`1st element in the array is currently: ${mixedArray[0]}`);

//push new value to beginning of array
mixedArray.unshift("javascript");

console.log(mixedArray);
//return new value to beginning of updated array
console.log(`1st element in the array is now: ${mixedArray[0]}`);
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////======================COME BACK TO THIS ONE======================////////////////////////
////////////////////======================COME BACK TO THIS ONE======================///////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
QUESTION 5:
Create a new array called nameLengths. 
Write a loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array.

For example:

let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
let nameLengths = [5, 3, 4]; 			//create this new array
*/

// let q5Names = ["Matthew", "Clarence", "Sarah", "Tim"];

// function arrLetterCount() {
//   for (let i = 0; i < q5Names.length; i++) {
//     counts = q5Names[i].length;
//     console.log(counts);

//   }
// }
// //arrLetterCount();
// //var bArray = arrLetterCount();
// //myArray = [arrLetterCount(), arrLetterCount()];
// var newArray = [];
// newArray.push(arrLetterCount());
// console.log(typeof newArray);
// console.log(newArray);

// let q5Names = ["Matt", "Clarence", "Sarah", "Tim"];

// const nameLengths = q5Names.map((names) => {
//   for (let i = 0; i < names.length; i++) {
//     counts = names[i].length;
//     return counts;
//   }
// });

// console.log(nameLengths);

/* 
let q5Names = ["Matthew", "Clarence", "Sarah", "Tim"];

function arrLetterCount() {
  for (let i = 0; i < q5Names.length; i++) {
    counts = q5Names[i].length;
    console.log(counts);
  } 
}

arrLetterCount();
const newArray = (Array.from(arrLetterCount()))
console.log(newArray);
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 6:
Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
*/

/* 
console.log(`<=== Question 6 ===>`);
//create array
const nameLength = [7, 8, 5, 3];

//function to sum all elements in the array
function sumArray(array) {
  let sum = 0;
  for (i = 0; i < array.length; i += 1) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(sumArray(nameLength));
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 7:
Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
*/
/* 
console.log(`<=== Question 7 ===>`);
//function to repeat and concatenate variable
function repeat(var1, num1) {
  console.log(var1.repeat(num1));
}

repeat("hellorepeat", 4);
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 8:
Write a function that takes two parameters, firstName and lastName, and returns a full name.  
The full name should be the first and the last name separated by a space.
*/

/* 
console.log(`<=== Question 8 ===>`);
//function to concatenate first and last name variables
const concatString = (firstName, lastName) => {
  console.log(firstName + " " + lastName);
};

concatString("Simon", "Says");
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 9:
Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/

/* 
console.log(`<=== Question 9 ===>`);
//declare variable to use in array summation function
let arrTotal = 0;

//created two array elements for test cases
const array0 = [5, 8, 15, 3, 1, 6];
const array1 = [5, 80, 15, 3, 1, 6];

//function to take in arrays and total the value of elements in array
function sumArray(array) {
  for (i = 0; i < array.length; i++) {
    arrTotal += array[i];
  }
  //return above function to use outside of block
  return arrTotal;
}

//console log 1st array test case to return true of value of array is greater than 100
console.log(array0);  
console.log(sumArray(array0)); // expected return value of array0 is 38

//value of array0 elements is less than 100 so it should return false
if (sumArray(array0) > 100) { 
  console.log(true);
} else {
  console.log(false);
}

//console log 2nd array test case to return true of value of array is greater than 100
console.log(array1);
console.log(sumArray(array1)); // expected return value of array0 is 186

//value of array0 elements is greater than 100 so it should return true
if (sumArray(array1) > 100) {
  console.log(true);
} else {
  console.log(false);
}
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 10:
Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/

/* 
console.log(`<=== Question 10 ===>`);
//declare array and assign values
const numbers = [11, 12, 32, 41, 55, 23];

//function to sum array elements
function sumArray(array) {
  let sum = 0;
//iterate through array elements to sum and get average of array
  for (i = 0; i < array.length; i += 1) {
    sum += array[i];
    avg = sum / array.length;
  }
  return avg;
}
//console log array average
console.log(sumArray(numbers));
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////======================COME BACK TO THIS ONE======================////////////////////////
////////////////////======================COME BACK TO THIS ONE======================///////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 11:
Write a function that takes two arrays of numbers and returns true if the average of the elements 
in the first array is greater than the average of the elements in the second array.
*/

// console.log(`<=== Question 11 ===>`);
// let arrTotal = 0;
// const arr1 = [83, 65, 7, 9, 117];
// const arr2 = [4, 7, 2, 8, 3];

// function sumArray(array) {
//   for (i = 0; i < array.length; i++) {
//     arrTotal += array[i];
//   }
//   return arrTotal;
// }

// const sumArr1 = sumArray(arr1);
// const sumArr2 = sumArray(arr2);
// console.log(sumArr1, sumArr2);

// function sumCompare(sumArr1, sumArr2) {
//   if (sumArr1 > sumArr2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(sumCompare(sumArr1, sumArr2));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 12:
Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 13:
Create a function of your own that solves a problem.   
In comments, write what the function does and why you created it.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
