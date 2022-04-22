//Define a function that takes in an array of numbers/integers and returns the sorted version 
//of that array, greatest to least. (Note: do NOT use the "reverse" method.)

/*
1. Initialised a function expression to variable "greatestToLeast" with a parameter
of "arr".

2. Initialised sortedArr to the passed array (arr) with the "sort" method called on it. The compare function returns each value to the new array based on the result of the equation. My compare function is "b-a" which will sort the largest number first to the new array. The number not returned is then compared to the next value.

3. The new array is then returned to the function showing an array from greatest to least

*/

const array = [-5, -2, -3, 3, 1, 5]

const greatestToLeast = arr => {
	let sortedArr = arr.sort((a, b) => {
		return b - a;
	});
	return sortedArr;
};

console.log(greatestToLeast(array));

console.log(greatestToLeast([-1, -5, -3, 4, 5, 1]));
