//Write a JavaScript function that accepts two arguments, a string and a letter and the function will
//count the number of occurrences of the specified letter within the string

/*
1. Create first function line with two parameters

2. Initialize a variable with the array of every individual character of the string, so we can use the array to search for our specific letter 
 */

const specialLetter = (string, letter) => {
    let firstArray = string.split("");
	let letterArray = firstArray.map(string =>
	  string.toLowerCase());
    let specLetter = letterArray.every((arr, letter) => 
	  letter.includes(arr));
	console.log(specLetter);
}

console.log(specialLetter("Oranges, apples, pears, grapes"));
