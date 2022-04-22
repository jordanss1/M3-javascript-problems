//Write a JavaScript function that takes in two parameters, an array and a number (n), 
//and return the first n elements of that array. 

/*
1. Initialise a const variable "firstNumOfElements" to a function expression with 
two parameters "arr" and "num"

2. Defined a variable "array" to an empty array to be used in our for loop declaration

3. Created a for loop which would loop through the array that was given as an
 argument. The stopping condition states that while i is less than our "num" passed as an
 argument we will increment by 1.

4. The elements that are looped are then passed to the empty array declared earlier
which is then returned at the end of our function. 

*/

const firstNumOfElements = (arr, num) => {
	let arrayOfElements = [];
	for(let i = 0; i < num; i++) {
		arrayOfElements.push(arr[i]);
	}
	return arrayOfElements;
};	

console.log(firstNumOfElements(["love", "giraffe", "spinal"], 3))