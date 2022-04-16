//Write a JavaScript function that accepts two arguments, a string and a letter and the function will
//count the number of occurrences of the specified letter within the string

/*
1. Create first function line with two parameters

2. Initialize a variable with the array of every individual character of the string using split method on it, so we can use the array to search for our specific letter 

3. Initialized a new variable to reference an array, assigned to the execution of the .map function on 'firstArray' which lowercases all the individual elements which are strings, so as not to cause errors

4. Initialized a variable which holds a new array assigned to the execution of .filter being called on 'letterArray'. This callback function finds each letter in the array which maches the argument, which are then filtered to the new array.

5. Final step console logs the .length property which shows us how many times the letter occurs in our entered string
 */

const specialLetter = (string, letter) => {
    let firstArray = string.split("");
	let letterArray = firstArray.map(string =>
	  string.toLowerCase());
    let specLetter = letterArray.filter(arr => 
	  letter.includes(arr));
	console.log(specLetter.length);
}

console.log(specialLetter("Oranges, Apples, Pears, Grapes", "s"));
